import Image from 'next/image'
import { Search, Home as HomeIcon, Bell, Mail, ClipboardList, Bookmark, BadgeCheck, User2, CircleEllipsis, MoreHorizontal } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <div className='flex items-center px-[308px]'>
        <div className='sidebar-l'>
          <div className='h-screen' >
            <a href='' className='flex gap-4 text-lg 0 px-4'>
              <div className='flex rounded-full p-3'>
                <img  className='invert hover:opacity-50 rounded-full' src="twitter1.png" width={35} height={35} alt="" />
              </div>
            </a>
            {/* Aqui começa um botão da sidebar da esquerda*/}
            <a href='' className='flex gap-4 text-lg 0 px-2'>
              <div className='flex hover:bg-zinc-900 rounded-full p-6 py-4 gap-5 text-xl font-bold'>
                <HomeIcon size={26}/>
                Página Inicial
              </div>
            </a>
            {/* Aqui termina um botão da sidebar da esquerda*/}
            {/* Aqui começa um botão da sidebar da esquerda*/}
            <a href='' className='flex gap-4 text-lg 0 px-2'>
              <div className='flex hover:bg-zinc-900 rounded-full p-6 py-4 gap-5 text-xl'>
                <Search size={26}/>
                Explorar
              </div>
            </a>
            {/* Aqui termina um botão da sidebar da esquerda*/}
            {/* Aqui começa um botão da sidebar da esquerda*/}
            <a href='' className='flex gap-4 text-lg 0 px-2'>
              <div className='flex hover:bg-zinc-900 rounded-full p-6 py-4 gap-5 text-xl'>
                <Bell size={26}/>
                Notificações
              </div>
            </a>
            {/* Aqui termina um botão da sidebar da esquerda*/}
            {/* Aqui começa um botão da sidebar da esquerda*/}
            <a href='' className='flex gap-4 text-lg 0 px-2'>
              <div className='flex hover:bg-zinc-900 rounded-full p-6 py-4 gap-5 text-xl'>
                <Mail size={26}/>
                Mensagens
              </div>
            </a>
            {/* Aqui termina um botão da sidebar da esquerda*/}
            {/* Aqui começa um botão da sidebar da esquerda*/}
            <a href='' className='flex gap-4 text-lg 0 px-2'>
              <div className='flex hover:bg-zinc-900 rounded-full p-6 py-4 gap-5 text-xl'>
                <ClipboardList size={26}/>
                Listas
              </div>
            </a>
            {/* Aqui termina um botão da sidebar da esquerda*/}
            {/* Aqui começa um botão da sidebar da esquerda*/}
            <a href='' className='flex gap-4 text-lg 0 px-2'>
              <div className='flex hover:bg-zinc-900 rounded-full p-6 py-4 gap-5 text-xl'>
                <Bookmark size={26}/>
                Itens salvos
              </div>
            </a>
            {/* Aqui termina um botão da sidebar da esquerda*/}
            {/* Aqui começa um botão da sidebar da esquerda*/}
            <a href='' className='flex gap-4 text-lg 0 px-2'>
              <div className='flex hover:bg-zinc-900 rounded-full p-6 py-4 gap-5 text-xl'>
                <BadgeCheck size={26}/>
                Verificadas
              </div>
            </a>
            {/* Aqui termina um botão da sidebar da esquerda*/}
            {/* Aqui começa um botão da sidebar da esquerda*/}
            <a href='' className='flex gap-4 text-lg 0 px-2'>
              <div className='flex hover:bg-zinc-900 rounded-full p-6 py-4 gap-5 text-xl'>
                <User2 size={26}/>
                Perfil
              </div>
            </a>
            {/* Aqui termina um botão da sidebar da esquerda*/}
            {/* Aqui começa um botão da sidebar da esquerda*/}
            <a href='' className='flex gap-4 text-lg 0 px-2'>
              <div className='flex hover:bg-zinc-900 rounded-full p-6 py-4 gap-5 text-xl'>
                <CircleEllipsis size={26}/>
                Mais
              </div>
            </a>
            {/* Aqui termina um botão da sidebar da esquerda*/}
            <div className='mr-5 mt-5'>
              <div className='flex justify-center bg-blue-500 hover:bg-blue-500/90 rounded-full ml-[14px] p-3'>
                <div className='font-bold text-lg'>Tweetar</div>
              </div>
            </div>
            <div className='flex items-center hover:bg-zinc-900 rounded-full mt-[11rem] ml-2 p-4 mr-5'>
              <div className='flex ml-2 gap-3'>
                <div id='img'>
                  <img className='rounded-full' src="eu.png" width={38} height={38} alt="" />
                </div>
                <div className='grid'>
                  <a className='font-semibold ml-[1px]'>David Lucas</a>
                  <a className='text-zinc-500 mt-[-4px]'>@DavidLucasK</a>
                </div>
                <div className=' flex items-center'>
                  <MoreHorizontal size={20}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='main bg-zinc-950 h-screen w-[600px] ml-8 border-r border-l border-zinc-700'>
          <div className='first-box border-b border-zinc-700'>
            <div className='font-bold p-3 text-xl ml-1'>Página Inicial</div>
            <div className='flex items-center' >
              <a href="" className='group'>
                <div className='w-[300px] h-[50px] flex justify-center font-semibold hover:bg-zinc-900'>
                  <div className='mt-4'>Para você</div>
                </div>
                <div className='border-2 rounded-full w-[70px] ml-[115px] border-blue-500'></div>
              </a>
              <a href="">
                <div className='w-[300px] h-[54px] flex justify-center text-zinc-500 hover:bg-zinc-900'>
                  <div className='mt-4'>Seguindo</div>
                </div>
              </a>
            </div>
          </div>
          <div className='second box'>

          </div>
        </div>
        <div className='sidebar-r bg-zinc-950 h-screen w-[380px]'>
          <div id='searchbar' className='ml-8'>
            <div className='mt-[6px] flex items-center relative'>
              <Search size={18} className='text-zinc-500 absolute ml-5'  />
              <input type="text" placeholder='Buscar no Twitter' className='bg-zinc-900 rounded-[30px] w-full h-[44px] p-3 px-14 placeholder-zinc-500'/>
            </div>
          </div>
          <div className='bg-zinc-900 rounded-xl p-4 grid ml-8 mt-10'>
            <div className='font-bold text-[21px] mt-[-5px]'>Obter verificação</div>
            <div className='font-semibold'>Assine para desbloquear novos recurosa.</div>
            <div className=''>
              <a href="" className=''>
                <div className='flex justify-center bg-blue-500 hover:bg-blue-500/90 rounded-full mt-2 w-[158px] h-9'>
                  <div className='flex  items-center font-bold'>
                    Obter verificação
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='grid bg-zinc-900 rounded-xl ml-8 mt-4 h-[340px] p-4'>
            <div className='font-bold text-xl h-1'>
              <div className=''>Oque está acontecendo</div>
            </div>
            <div className='grid hover:bg-zinc-800'>
              <div className='grid'>
                <div className='text-zinc-500'>Assuntos do momento</div>
                <div className='font-semibold'>#TwitterX</div>
                <div className='text-zinc-500'>89 mil Tweets</div>
              </div>
              <div className=''>
                <MoreHorizontal width={20}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}
