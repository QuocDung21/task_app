import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import connectMongoDB from '../../../lib/db';
import User from '../../../models/user.model';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID! || "564675599962-3tj0r2ak1d845ckbet4l9h6bs6rjcv4u.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! || "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",
    }),
    // Bạn có thể thêm các providers khác nếu muốn
  ],
  callbacks: {
    async session({ session, token, user }) {
      await connectMongoDB()
      let userDb = await User.findOne({ email: session.user?.email })
      if (!userDb) {
        await User.create({
          email: session.user?.email
        })
      }
      return session
    },
  },
})
