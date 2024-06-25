export const OverviewComponent=()=>{
    return <>
    <div className="lg:ml-[220px]">
        <div className="flex justify-between pt-[32px] pb-5">
            <div className="text-2xl font-semibold pl-4">Overview</div>
            <div className="mr-4 border-2 border-gray-200">
                <button className="flex p-1 px-2 bg-white ">This month <svg className="h-6 pt-1 pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</button>
            </div>
        </div>



        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-3 bg-[#146EB4] hover:bg-[#0E4F82] text-white pt-4 rounded-md ml-4">
                <div className="flex">
                    <div className="text-sm pl-4">Next Payout</div>
                    <div className="pl-3"><svg className="h-2 pt-1 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    </div>
                </div>

                <div className="flex justify-between pb-2">
                    <div className="text-3xl font-semibold pl-4">₹2,312.23</div>
                    <div className="flex">
                        <div className="underline font-semibold pt-2">23 Orders</div>
                        <div className="pt-2 pr-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                </div>

                <div className="flex justify-between bg-[#0E4F82] p-3 rounded-md">
                        <div>Next Payment Date:</div>
                        <div>Today, 4:00PM</div>
                </div>
            </div>


            <div>
                <div className="flex flex-col gap-3 bg-white text-black drop-shadow-md pt-4 rounded-md ml-4">
                    <div className="flex">
                        <div className="text-sm pl-4">Amount Pending</div>
                        <div className="pl-3"><svg className="h-2 pt-1 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg></div>
                    </div>

                    <div className="flex justify-between pb-2">
                        <div className="text-3xl font-semibold pl-4">₹92,312.20</div>
                            <div className="flex">
                            <div className="underline font-semibold pt-2 text-[#146EB4]">15 Orders</div>
                            <div className="pt-2 pr-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                
                

            <div>
                <div className="flex flex-col gap-3 bg-white text-black drop-shadow-md pt-4 rounded-md ml-4 mr-4">
                    <div className="flex">
                        <div className="text-sm pl-4">Amount Processed</div>
                        <div className="pl-3"><svg className="h-2 pt-1 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg></div>
                    </div>

                    <div className="flex justify-between pb-2">
                        <div className="text-3xl font-semibold pl-4">₹23,92,312.19</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex font-medium text-xl ml-4 mt-4 text-[#1A181E]">
            Transactions | This Month
        </div>

        <div className="flex pb-10">
            <div className="bg-gray-200 rounded-full text-gray-500 ml-4 mt-7 px-5 py-2 font-semibold">
                <button>Payouts (22)</button>
            </div>
            <div className="bg-[#146EB4] rounded-full text-white ml-2 mt-7 px-5 py-2 font-semibold">
                <button>Refunds (7)</button>
            </div>
        </div>

        
        <div className="bg-white drop-shadow-md">
                <div className="flex justify-between ml-4 pt-5 mr-4">
                        <div>
                        <div className="flex bg-white pl-4 py-2 rounded-md sm:flex-grow border border-gray-400">
                            <svg className="pt-[5px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
                            <input className="w-[280px] bg-white pl-3 outline-none" type="text" placeholder="Order Id or Transaction Id"></input>
                        </div>
                    </div>
                

                    <div className="flex gap-2">
                        <div className="bg-white px-4 py-2 rounded-sm border border-gray-400">
                            <button className="flex text-md">Sort<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>
</button>
                        </div>
                        <div>
                            <button className="bg-white px-2 py-2 rounded-sm border border-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-5 mt-5 justify-around pb-5">
                    <div className="bg-gray-200 pl-4 py-2">Order Id</div>
                    <div className="bg-gray-200 py-2">Status</div>
                    <div className="bg-gray-200 py-2">Transaction Id</div>
                    <div className="bg-gray-200 py-2">Refund Date</div>
                    <div className="bg-gray-200 py-2">Order Amount</div>
                    <Data orderId={'#281209'} Status={'Successful'} TransactionId={'TRX123456'} RefundDate={'Today, 8:45 PM'} OrderAmount={1125.00}/>
                    <Data orderId={'#281210'} Status={'Processing'} TransactionId={'TRX789012'} RefundDate={'Tomorrow, 10:00 AM'} OrderAmount={950.50}/>
                    <Data orderId={'#281211'} Status={'Successful'} TransactionId={'TRX345635'} RefundDate={'Yesterday, 3:30 PM'} OrderAmount={3451.00}/>
                    <Data orderId={'#281212'} Status={'Successful'} TransactionId={'TRX483020'} RefundDate={'Today, 10:08 AM'} OrderAmount={876.34}/>
                    <Data orderId={'#281213'} Status={'Processing'} TransactionId={'TRX839210'} RefundDate={'Tomorrow, 9:38 AM'} OrderAmount={1000.00}/>
                    <Data orderId={'#281214'} Status={'Successful'} TransactionId={'TRX820100'} RefundDate={'Yesterday, 1:00 PM'} OrderAmount={1480.30}/>
                    <Data orderId={'#281215'} Status={'Successful'} TransactionId={'TRX931919'} RefundDate={'Today, 8:00 AM'} OrderAmount={7000.00}/>
                    <Data orderId={'#281216'} Status={'Processing'} TransactionId={'TRX301003'} RefundDate={'Tomorrow, 4:10 PM'} OrderAmount={1234.03}/>
                </div>
                
        </div>
        <div className="flex justify-center text-gray-500 mt-5 mb-5">
            <div className="text-sm">Made with ❤️ by- </div>
            <div className="underline font-bold text-sm"> Ayush Saini</div>
        </div>

        </div>
    </>
}


function Data({orderId,Status,TransactionId,RefundDate,OrderAmount}){
    return <>
        <div className="pl-4 py-2">{orderId}</div>
        <div className="py-2 flex">
            
            {Status=='Successful'?<div className="flex">
                <div className="h-2 w-2 mt-2 mr-1 rounded-full bg-green-500"></div>
            <div>{Status}</div>
            </div>:<div className="flex"><div className="h-2 w-2 mt-2 mr-1 rounded-full bg-red-500"></div>
            <div>{Status}</div></div>}
            
            
        </div>
        <div className="py-2">{TransactionId}</div>
        <div className="py-2">{RefundDate}</div>
        <div className="py-2">₹{OrderAmount}</div>
    </>
}