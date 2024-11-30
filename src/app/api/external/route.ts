import { NextResponse } from "next/server";

// Define the External Api Url
const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts"


export async function GET (){
    try {
        const response = await fetch (EXTERNAL_API_URL)
//there is reponse is not ok 
        if (!response.ok){
            return NextResponse.json(
               {success:false, message :"Failed Fetch The Data from the API"},
               {status:response.status}
            )
        }
        //parsing:conversion of object data into json 
        const data = await response.json()

        return NextResponse.json({
            success:true,data})

    }catch (error:any) {return NextResponse.json({
        success:false,message:"get the error!",error:error.message
    })

    }
}

