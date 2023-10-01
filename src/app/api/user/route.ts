import { NextRequest, NextResponse } from "next/server"
import connection from "@/database/Dbconfig"
import User from "@/models/user"
export async function POST(req: NextRequest) {
    const connect = await connection()
    const reqbody = await req.json()
    const { Username, Email, Password } = reqbody
    if (Username && Email && Password) {
        const createuser = new User({ username: Username, email: Email, password: Password })
       try {
        let c = await createuser.save()
        if (c) {
            return NextResponse.json({ c })
        }
       } catch (error) {
            return NextResponse.json({ error:"Already a user" })
       }
        
    }
    return NextResponse.json({ Email })
}