export const Topbar=()=>{
    return <>
        <div className="flex justify-between border-b-2 ml-0 lg:ml-[220px] py-3">
            <div className="flex justify-center items-center"><div className="text-[#1A181E] text-xl font-medium pr-3 pl-4">
                Payouts</div>
            <svg className="pt-[2px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>
            <div className="text-[#696767] text-sm">How it works</div>
            </div>
            <div>
                <div className="flex bg-[#f2f2f2] pl-4 py-2 rounded-md sm:flex-grow">
                    <svg className="pt-[5px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
                    <input className="w-[280px] bg-[#f2f2f2] pl-3 outline-none" type="text" placeholder="Search features, tutorials,etc"></input>
                </div>
            </div>
            <div className="flex">
                <div>
                <svg className="h-8 pt-3 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
                </div>
                <div>
                <svg className="h-8 pt-3 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                </div>
            </div>
        </div>
    </>
}



export const Cardblue=({title,order,amount})=>{
    return <>
        <div className="shadow-md bg-[#146EB4] hover:bg-[#0E4F82] px-4 py-8 rounded-[8px]">
            <div className="text-white">{title} ?</div>
            <div className="flex flex-col gap-6">
                <div className="flex text-white justify-between">
                    <div className="font-semibold text-2xl">{amount}</div>
                        <div className="flex">{order} Orders 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                    </div>
                </div>
            </div>
            
        </div>
    </>
}
