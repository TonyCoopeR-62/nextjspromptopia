import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';
import User from '@models/user';


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session?.user?.email});

      return {
        ...session,
        user: {
          ...session.user,
          id: sessionUser._id.toString(),
        }
      };
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
  
        const userExists = await User.findOne({
          email: profile?.email,
        })
  
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(' ', '').toLowerCase(),
            image: profile?.image,
          })
        }
  
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },


})

export { handler as GET, handler as POST };