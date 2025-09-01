"use client"

import { useState } from "react"

export default function Page(){
  const [task, setTask] = useState("");
  return(
    <div className="w-96 border m-auto mt-5 h-96 rounded-2xl">
      <div className=" flex justify-center pt-10 gap-3">
        <input type="text" placeholder="Digite" className="border rounded-[5px] p-1 h-[40px]"/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded h-[40px] hover:cursor-pointer">Adicionar</button>
      </div>
      <div>
        tarefas
      </div>
    </div>
  )
}