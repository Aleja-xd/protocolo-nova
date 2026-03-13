import { NextRequest, NextResponse } from "next/server";

export function GET(){

    return NextResponse.json({status: true, data: [{id: 1, name: 'Cristian',cost: '1500usd'},{id: 2, name: 'David',cost: '2500usd'}]})
}

export async function POST(request: NextRequest){

    const properties = await request.json();

    return NextResponse.json({properties})
}