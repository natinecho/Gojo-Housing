import prisma from "../lib/prisma.js"

export const getChats = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chats = await prisma.chat.findMany({
      where: {
        userIDs: {
          hasSome: [tokenUserId],

        }
      }
    })


    for (const chat of chats) {
      const receiverId = chat.userIDs.find((id) => id !== tokenUserId);
      
      const receiver = await prisma.user.findUnique({
        where: {
          id: receiverId,
        },
        select: {
          id: true,
          username: true,
          avatar: true,
        }
      })
      chat.receiver = receiver;
    }


    res.status(200).json(chats)
  } catch (err) {
    console.log(err)
    res.status(500).json({message: "Failed to get chats"})
  }
}


export const getChat = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.id;

  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: chatId,
        userIDs: {
          hasSome: tokenUserId ? [tokenUserId] : null, // Ensure tokenUserId is not undefined
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found!" });
    }

    await prisma.chat.update({
      where: {
        id: chatId,
      },
      data: {
        seenBy: {
          push: tokenUserId, // Ensure tokenUserId is defined and valid
        },
      },
    });

    res.status(200).json(chat);
  } catch (err) {
    console.error("Error fetching chat:", err);
    res.status(500).json({ message: "Failed to get chat!" });
  }
};

export const addChat = async (req, res) => {
  const tokenUserId = req.userId;

  if (!req.body.receiverId) {
    return res.status(400).json({ message: "Receiver ID is required" });
  }

  try {
    const newChat = await prisma.chat.create({
      data: {
        userIDs: [tokenUserId, req.body.receiverId]
      }
    });
    res.status(200).json(newChat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add chat" });
  }
};

export const readChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chat = await prisma.chat.update({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId]
        },
        data: {
          seenBy: {
            set: [tokenUserId]
          },
        }
      }
    })
    res.status(200).json(chat)
  } catch (err) {
    console.log(err)
    res.status(500).json({message: "Failed to get read"})
  }
}

