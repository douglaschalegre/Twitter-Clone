import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// ! TWEETS
router.get('/TweetsFromUser/:id', async (req: Request, res: Response) => {
  const authorId = req.params.id;
  const tweets = await prisma.tweet.findMany({
    where: {
      authorId: Number(authorId),
    },
  });
  let tweetsFormated = tweets.map((tweet) => {
    let updated: any = { ...tweet };
    updated.createdAt = tweet.createdAt
      .toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
      .replace('.', '');
    return updated;
  });
  res.json(tweetsFormated);
});

router.post('/tweets/tweetar', async (req: Request, res: Response) => {
  const { content, authorId, retweet } = req.body;
  console.log(req.body);
  let postTweet;
  if (retweet) {
    postTweet = {
      content,
      authorId: Number(authorId),
      retweet: true,
    };
  } else {
    postTweet = {
      content,
      authorId: Number(authorId),
    };
  }
  const tweet = await prisma.tweet.create({
    data: postTweet,
  });
  res.json(tweet);
});

router.put('/tweets/like', async (req: Request, res: Response) => {
  const { id } = req.body;
  const updatedTweet = await prisma.tweet.update({
    where: {
      id: id,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });
  res.json(updatedTweet);
});

router.delete('/tweets/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedTweet = await prisma.tweet.delete({
    where: {
      id: id,
    },
  });
  res.json(deletedTweet);
});

// ! USERS
router.get('/user/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  let user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  let userFormated: any = { ...user };
  userFormated.createdAt = userFormated.createdAt
    .toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    .replace('.', '');
  res.json(userFormated);
});

router.post('/users/createuser', async (req: Request, res: Response) => {
  const { email, username, password, name, location, description } = req.body;
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password,
      name,
      location,
      description,
    },
  });
  res.json(user);
});

router.put('/users/', async (req: Request, res: Response) => {
  const { id, username } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      username: username,
    },
  });
  res.json(updatedUser);
});

router.delete('/users/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletedUser);
});

export default router;
