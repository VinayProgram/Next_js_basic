import { NextRequest, NextResponse } from "next/server"
import connection from "@/database/Dbconfig"
import User from "@/models/user"
export async function POST(req: NextRequest) {
    const connect = await connection()
    const reqbody = await req.json()
    const { Email, Password } = reqbody
    if (Email && Password) {
        const createuser = await User.findOne({email: Email, password: Password })
       try {
        if (createuser) {
            return NextResponse.json({ createuser })
        }
        else{
            return NextResponse.json({ Log:"No Such User" })
        }
       } catch (error) {
            return NextResponse.json({ error:"Already a user" })
       }
        
    }
    return NextResponse.json({  })
}