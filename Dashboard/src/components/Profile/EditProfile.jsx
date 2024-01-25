import React from 'react'
import SideBar from '@/components/DashboardComponets/SideBar'

const EditProfile = () => {
  return (
    <> 
    <div className='flex'>
        <SideBar />
        <div className={`flex-1 bg-white ${SideBar.expanded ? 'ml-[0px]' : 'ml-[0px]'}`}>
            <div className="relative w-vw h-[153px]">
                <div className="w-vw">
                    <img src="/img/img-events-top.png" className="rounded-tl-[40px] h-[153px]" />
                </div>
                <div className="absolute top-[114px] text-white flex gap-2 items-center ml-[49px]">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00619 6.16667C4.44352 6.16667 3.17285 4.89533 3.17285 3.33333C3.17285 1.77133 4.44352 0.5 6.00619 0.5C7.56885 0.5 8.83952 1.77133 8.83952 3.33333C8.83952 4.89533 7.56885 6.16667 6.00619 6.16667ZM6.00619 1.5C4.99485 1.5 4.17285 2.322 4.17285 3.33333C4.17285 4.34467 4.99485 5.16667 6.00619 5.16667C7.01752 5.16667 7.83952 4.34467 7.83952 3.33333C7.83952 2.322 7.01685 1.5 6.00619 1.5ZM11.1668 13V11.0127C11.1668 9.2387 10.1628 7.16667 7.3335 7.16667H4.66683C1.8375 7.16667 0.833496 9.23803 0.833496 11.0127V13C0.833496 13.276 1.0575 13.5 1.3335 13.5C1.6095 13.5 1.8335 13.276 1.8335 13V11.0127C1.8335 10.3454 2.03816 8.16667 4.66683 8.16667H7.3335C9.96216 8.16667 10.1668 10.3447 10.1668 11.0127V13C10.1668 13.276 10.3908 13.5 10.6668 13.5C10.9428 13.5 11.1668 13.276 11.1668 13Z" fill="white"/>
                </svg>
                    <p>Mi perfil</p>
                </div>
            </div>

            <div className="flex p-10">
                <div className="flex">
                    <img className="rounded-full h-[64px] w-[64px] max-w-full" src="/img/tm1.png" />
                </div>
                <div className="flex flex-col ml-[18px]">
                    <div className="flex w-[970px] items-center justify-between">
                        <p className="text-[#23254C] text-[28px] font-semibold">Marcela Rivero</p>
                        <button className="bg-white border border-1 w-[44px] h-[44px] rounded flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="bell">
                            <path id="bell_2" d="M12.4992 21.75C11.5112 21.75 10.6232 21.237 10.1212 20.378C9.91322 20.02 10.0332 19.561 10.3912 19.352C10.7472 19.144 11.2072 19.264 11.4172 19.622C11.8762 20.409 13.1222 20.409 13.5812 19.622C13.7902 19.264 14.2502 19.144 14.6072 19.352C14.9652 19.56 15.0862 20.02 14.8772 20.378C14.3752 21.237 13.4872 21.75 12.4992 21.75ZM21.1742 18.325C21.2992 18.065 21.2642 17.757 21.0852 17.532C21.0662 17.509 19.2442 15.189 19.2442 12.5V8.995C19.2442 5.276 16.2182 2.25 12.4992 2.25C8.78023 2.25 5.75422 5.276 5.75422 8.995V12.5C5.75422 15.189 3.93223 17.509 3.91323 17.532C3.73423 17.757 3.69922 18.066 3.82422 18.325C3.94922 18.584 4.21123 18.75 4.49923 18.75H20.4992C20.7872 18.75 21.0492 18.584 21.1742 18.325ZM7.25422 12.5V8.995C7.25422 6.103 9.60723 3.75 12.4992 3.75C15.3912 3.75 17.7442 6.103 17.7442 8.995V12.5C17.7442 14.436 18.4942 16.158 19.1122 17.25H5.88523C6.50423 16.158 7.25422 14.436 7.25422 12.5Z" fill="#231D43"/>
                            </g>
                            </svg>
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-[#23254C]">Jurado técnico</p>
                        <p className="border border-[#1C694E] rounded-full text-[#1C694E] px-2 font-bold">cuenta asociada a gmail</p>
                        <p className="border border-[#4E3B8E] rounded-full text-[#4E3B8E] px-2 font-bold">Federación Club Hípico</p>
                    </div>
                    <p className="text-[#6D6E6D] mt-[11px] ml-0">Panel de edición de tu perfil.</p>
                </div>
            </div>

                <div className="w-[1047px] h-[247px] rounded-[10px] bg-white border border-[#D1DADA] text-[#23254C] pt-[27px] px-[31px] ml-[47px]">
                    <div className="flex w-[100%] items-center justify-between">
                        <p className="text-[20px] font-bold">Información personal</p>
                        <div className="mr-[25px] w-[44px] h-[44px] flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="pen-line">
                            <path id="pen-line_2" d="M21.75 7.23194C21.751 6.49594 21.4651 5.80394 20.9441 5.28394L18.7161 3.05603C18.1951 2.53603 17.5051 2.249 16.7681 2.25C16.0321 2.251 15.341 2.53894 14.823 3.05994L2.46899 15.471C2.32799 15.6119 2.25 15.802 2.25 16V21C2.25 21.414 2.586 21.75 3 21.75H8C8.198 21.75 8.38905 21.671 8.52905 21.532L20.9399 9.177C21.4619 8.659 21.749 7.96794 21.75 7.23194ZM7.68994 20.251H3.75V16.311L12.7429 7.27698L16.7251 11.2579L7.68994 20.251ZM19.8821 8.11499L17.7881 10.2L13.801 6.21399L15.886 4.11902C16.122 3.88202 16.436 3.75198 16.771 3.75098H16.772C17.106 3.75098 17.42 3.88095 17.657 4.11695L19.885 6.34497C20.121 6.58197 20.251 6.89596 20.251 7.23096C20.25 7.56496 20.1191 7.87899 19.8821 8.11499ZM21.75 21.001C21.75 21.415 21.414 21.751 21 21.751H14C13.586 21.751 13.25 21.415 13.25 21.001C13.25 20.587 13.586 20.251 14 20.251H21C21.414 20.251 21.75 20.587 21.75 21.001Z" fill="#23254C"/>
                            </g>
                            </svg>
                        </div>
                    </div>
                    <div className="flex mt-[9px]">
                        <div className="flex w-[50%]">
                            <div className="flex flex-col gap-[8px]">

                                <div className='relative flex items-center'>
                                    <div className='absolute left-3 text-[#A1A0A0]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="user-alt">
                                        <path id="user-alt_2" d="M10.0074 8.95833C8.05403 8.95833 6.4657 7.36917 6.4657 5.41667C6.4657 3.46417 8.05403 1.875 10.0074 1.875C11.9607 1.875 13.549 3.46417 13.549 5.41667C13.549 7.36917 11.9607 8.95833 10.0074 8.95833ZM10.0074 3.125C8.7432 3.125 7.7157 4.1525 7.7157 5.41667C7.7157 6.68083 8.7432 7.70833 10.0074 7.70833C11.2715 7.70833 12.299 6.68083 12.299 5.41667C12.299 4.1525 11.2707 3.125 10.0074 3.125ZM16.4582 17.5V15.0159C16.4582 12.7984 15.2032 10.2083 11.6665 10.2083H8.33317C4.7965 10.2083 3.5415 12.7975 3.5415 15.0159V17.5C3.5415 17.845 3.8215 18.125 4.1665 18.125C4.5115 18.125 4.7915 17.845 4.7915 17.5V15.0159C4.7915 14.1817 5.04734 11.4583 8.33317 11.4583H11.6665C14.9523 11.4583 15.2082 14.1809 15.2082 15.0159V17.5C15.2082 17.845 15.4882 18.125 15.8332 18.125C16.1782 18.125 16.4582 17.845 16.4582 17.5Z" fill="#A1A0A0"/>
                                        </g>
                                        </svg>
                                    </div>
                                    <input className='w-[320px] h-[44px] py-[10px] pl-[40px] border rounded placeholder-[#23254C]' placeholder='Marcela Rivero' />
                                </div>
                                <div className='relative flex items-center'>
                                    <div className='absolute left-3 text-[#A1A0A0]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="envelope-open">
                                        <path id="envelope-open_2" d="M15 18.1243H5C2.985 18.1243 1.875 17.0143 1.875 14.9993V8.10929C1.875 7.20179 2.32585 6.35929 3.08085 5.85596L8.2666 2.3993C9.31993 1.69763 10.6801 1.69763 11.7334 2.3993L16.9191 5.85596C17.6741 6.35929 18.125 7.20179 18.125 8.10929V14.9993C18.125 17.0143 17.015 18.1243 15 18.1243ZM10 3.12345C9.6375 3.12345 9.27579 3.22846 8.95996 3.4393L3.77421 6.89596C3.36754 7.16679 3.125 7.62095 3.125 8.10929V14.9993C3.125 16.3135 3.68583 16.8743 5 16.8743H15C16.3142 16.8743 16.875 16.3135 16.875 14.9993V8.10929C16.875 7.62095 16.6325 7.16679 16.2258 6.89596L11.04 3.4393C10.7242 3.22846 10.3625 3.12345 10 3.12345ZM10.7141 12.4493L14.5341 9.67096C14.8133 9.46763 14.875 9.07679 14.6716 8.79763C14.4691 8.51929 14.0801 8.45596 13.7984 8.66013L9.97925 11.4376C9.92425 11.4776 9.85255 11.4776 9.79838 11.4385L5.97839 8.66013C5.69756 8.4568 5.30665 8.51929 5.10498 8.79763C4.90165 9.07679 4.96335 9.46763 5.24251 9.67096L9.0625 12.4493C9.30917 12.6285 9.59832 12.7185 9.88749 12.7185C10.1775 12.7185 10.4674 12.6293 10.7141 12.4493Z" fill="#A1A0A0"/>
                                        </g>
                                        </svg>
                                    </div>
                                    <input className='w-[320px] h-[44px] py-[10px] pl-[40px] border rounded placeholder-[#23254C]' placeholder='marcela@gmail.com' />
                                </div>
                                <div className='relative flex items-center'>
                                    <div className='absolute left-3 text-[#A1A0A0]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="bank">
                                        <path id="bank_2" d="M17.5 16.8748H17.2917V15.8332C17.2917 14.9332 16.7325 14.3748 15.8333 14.3748H15.625V9.7915H15.8333C16.7325 9.7915 17.2917 9.23317 17.2917 8.33317V6.2006C17.2917 5.64477 16.9825 5.14482 16.485 4.89649L10.8383 2.0732C10.3125 1.81154 9.68585 1.81154 9.16168 2.0732L3.51501 4.89649C3.01751 5.14482 2.70833 5.64477 2.70833 6.2006V8.33317C2.70833 9.23317 3.2675 9.7915 4.16667 9.7915H4.375V14.3748H4.16667C3.2675 14.3748 2.70833 14.9332 2.70833 15.8332V16.8748H2.5C2.155 16.8748 1.875 17.1548 1.875 17.4998C1.875 17.8448 2.155 18.1248 2.5 18.1248H17.5C17.845 18.1248 18.125 17.8448 18.125 17.4998C18.125 17.1548 17.845 16.8748 17.5 16.8748ZM14.375 14.3748H12.2917V9.7915H14.375V14.3748ZM8.95833 14.3748V9.7915H11.0417V14.3748H8.95833ZM3.98671 8.51892C3.98588 8.51892 3.98588 8.51892 3.98671 8.51892C3.98255 8.51226 3.95833 8.46317 3.95833 8.33317V6.2006C3.95833 6.12144 4.00245 6.04987 4.07328 6.01404L9.71995 3.19076C9.89745 3.10242 10.1025 3.10242 10.28 3.19076L15.9267 6.01404C15.9976 6.04904 16.0417 6.1206 16.0417 6.2006V8.33317C16.0417 8.46317 16.0175 8.51154 16.0192 8.51404C16.0125 8.51737 15.9633 8.5415 15.8333 8.5415H4.16667C4.04083 8.5415 3.99088 8.51892 3.98671 8.51892ZM5.625 9.7915H7.70833V14.3748H5.625V9.7915ZM3.95833 15.8332C3.95833 15.7032 3.98248 15.6548 3.98081 15.6523C3.98748 15.649 4.03667 15.6248 4.16667 15.6248H15.8333C15.985 15.6248 16.015 15.6474 16.0142 15.6474C16.0175 15.6549 16.0417 15.7032 16.0417 15.8332V16.8748H3.95833V15.8332ZM8.95833 5.83317C8.95833 5.25817 9.425 4.79151 10 4.79151C10.575 4.79151 11.0417 5.25817 11.0417 5.83317C11.0417 6.40817 10.575 6.87484 10 6.87484C9.425 6.87484 8.95833 6.40817 8.95833 5.83317Z" fill="#A1A0A0"/>
                                        </g>
                                        </svg>
                                    </div>
                                    <input className='w-[320px] h-[44px] py-[10px] pl-[40px] border rounded placeholder-[#23254C]' placeholder='AR 123 456' />
                                </div>
                            </div>

                        {/* aca inputs derecha */}
                            <div className='flex flex-col ml-[112px] gap-2'>
                                <div className='relative flex items-center'>
                                    <div className='absolute left-3 text-[#A1A0A0]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="location-pin">
                                        <path id="location-pin_2" d="M10.0002 1.875C5.97933 1.875 2.7085 5.14583 2.7085 9.16667C2.7085 13.4317 6.62266 16.0166 9.21266 17.7275L9.6535 18.02C9.7585 18.09 9.87933 18.125 10.0002 18.125C10.121 18.125 10.2418 18.09 10.3468 18.02L10.7877 17.7275C13.3777 16.0166 17.2918 13.4317 17.2918 9.16667C17.2918 5.14583 14.021 1.875 10.0002 1.875ZM10.0993 16.6842L10.0002 16.7501L9.90099 16.6842C7.39266 15.0275 3.9585 12.7592 3.9585 9.16667C3.9585 5.835 6.6685 3.125 10.0002 3.125C13.3318 3.125 16.0418 5.835 16.0418 9.16667C16.0418 12.7592 12.6068 15.0283 10.0993 16.6842ZM10.0002 6.45833C8.50683 6.45833 7.29183 7.67333 7.29183 9.16667C7.29183 10.66 8.50683 11.875 10.0002 11.875C11.4935 11.875 12.7085 10.66 12.7085 9.16667C12.7085 7.67333 11.4935 6.45833 10.0002 6.45833ZM10.0002 10.625C9.196 10.625 8.54183 9.97083 8.54183 9.16667C8.54183 8.3625 9.196 7.70833 10.0002 7.70833C10.8043 7.70833 11.4585 8.3625 11.4585 9.16667C11.4585 9.97083 10.8043 10.625 10.0002 10.625Z" fill="#A1A0A0"/>
                                        </g>
                                        </svg>
                                    </div>
                                    <input className='w-[320px] h-[44px] py-[10px] pl-[40px] border rounded placeholder-[#23254C]' placeholder='Buenos Aires, Argentina' />
                                </div>
                                <div className='relative flex items-center'>
                                    <div className='absolute left-3 text-[#A1A0A0]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="phone-flip">
                                        <path id="phone-flip_2" d="M6.20639 18.1267C5.41472 18.1267 4.63305 17.9058 3.93222 17.4733C2.88805 16.8291 2.15053 15.77 1.91053 14.5667C1.75469 13.79 2.10716 12.9942 2.78882 12.5875L4.99219 11.2741C6.05719 10.6383 7.43631 10.9475 8.12798 11.98L8.76315 12.9275C10.5631 12.0475 12.0447 10.5625 12.9264 8.75332L11.984 8.12666C10.9498 7.43916 10.6355 6.06331 11.268 4.99498L12.5705 2.79499C12.9772 2.10999 13.7715 1.75499 14.554 1.91166C15.7706 2.15499 16.8289 2.89249 17.4739 3.93749C18.1155 4.97749 18.2905 6.19416 17.9705 7.36166C16.5597 12.495 12.4922 16.5608 7.35466 17.9708C6.97383 18.075 6.58889 18.1267 6.20639 18.1267ZM6.18726 12.195C5.99726 12.195 5.80641 12.245 5.63225 12.3483L3.42969 13.6617C3.20303 13.7975 3.08465 14.0625 3.13632 14.3217C3.30882 15.1858 3.83895 15.9467 4.58895 16.4092C5.32895 16.8658 6.1922 16.9925 7.02304 16.765C11.7364 15.4708 15.4697 11.7408 16.763 7.02999C16.9914 6.19999 16.8655 5.33497 16.408 4.59247C15.9455 3.84164 15.1848 3.31248 14.3206 3.13915C14.0489 3.08498 13.7806 3.20249 13.6447 3.43166L12.3422 5.63165C12.0481 6.12748 12.1939 6.76664 12.6739 7.08581L14.0582 8.00665C14.3082 8.17249 14.4039 8.49165 14.2889 8.76748C13.2539 11.2466 11.2455 13.26 8.77719 14.2916C8.50385 14.4066 8.18313 14.3117 8.0173 14.0633L7.08814 12.6758C6.88147 12.365 6.53809 12.195 6.18726 12.195Z" fill="#A1A0A0"/>
                                        </g>
                                        </svg>
                                    </div>
                                    <input className='w-[320px] h-[44px] py-[10px] pl-[40px] border rounded placeholder-[#23254C]' placeholder='123 456 789' />
                                </div>
                            </div>


                            
                           
                        </div>      
                    </div>
                </div> 




                <div className="w-[1047px] h-[270px] rounded-[10px] bg-white border border-[#D1DADA] text-[#23254C] pt-[27px] px-[31px] ml-[47px] mt-[19px]">
                    <div className="flex w-[100%] items-center justify-between">
                        <p className="text-[20px] font-bold">Roles</p>
                        <button className="mr-[25px] hover:bg-slate-50 cursor-pointer w-[44px] h-[44px] flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="pen-line">
                            <path id="pen-line_2" d="M21.75 7.23194C21.751 6.49594 21.4651 5.80394 20.9441 5.28394L18.7161 3.05603C18.1951 2.53603 17.5051 2.249 16.7681 2.25C16.0321 2.251 15.341 2.53894 14.823 3.05994L2.46899 15.471C2.32799 15.6119 2.25 15.802 2.25 16V21C2.25 21.414 2.586 21.75 3 21.75H8C8.198 21.75 8.38905 21.671 8.52905 21.532L20.9399 9.177C21.4619 8.659 21.749 7.96794 21.75 7.23194ZM7.68994 20.251H3.75V16.311L12.7429 7.27698L16.7251 11.2579L7.68994 20.251ZM19.8821 8.11499L17.7881 10.2L13.801 6.21399L15.886 4.11902C16.122 3.88202 16.436 3.75198 16.771 3.75098H16.772C17.106 3.75098 17.42 3.88095 17.657 4.11695L19.885 6.34497C20.121 6.58197 20.251 6.89596 20.251 7.23096C20.25 7.56496 20.1191 7.87899 19.8821 8.11499ZM21.75 21.001C21.75 21.415 21.414 21.751 21 21.751H14C13.586 21.751 13.25 21.415 13.25 21.001C13.25 20.587 13.586 20.251 14 20.251H21C21.414 20.251 21.75 20.587 21.75 21.001Z" fill="#23254C"/>
                            </g>
                            </svg>
                        </button>
                    </div>
                    <div className="flex mt-[9px]">
                        <div className="flex w-[50%]">
                            <div className="flex flex-col gap-[8px]">
                                <div className='relative flex items-center'>
                                    <select className='w-[320px] py-[10px] border border-[#D1DADA] px-2 bg-white'>
                                        <option>Seleccionar Rol</option>
                                        <option>Rol1</option>
                                        <option>Rol 2</option>
                                        <option>Rol 3</option>
                                        <option>Rol 4</option>
                                        <option>Rol 5</option>
                                        <option>Rol 6</option>
                                    </select>
                                </div>

                                <div className='flex'>
                                <div className='flex flex-col gap-3'>
                                    <p className="text-[20px] font-bold mt-[16px]">Contraseña</p>
                                    <div className='relative flex items-center'>    
                                        <div className='absolute left-3 text-[#A1A0A0]'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46967 2.46967C2.76257 2.17678 3.23744 2.17678 3.53033 2.46967L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967Z" fill="#656579"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9963 10.1148C11.3069 10.3889 11.3364 10.8628 11.0623 11.1734C10.8674 11.3942 10.75 11.6825 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.3175 13.25 12.6058 13.1326 12.8266 12.9377C13.1372 12.6636 13.6111 12.6931 13.8852 13.0037C14.1593 13.3143 14.1298 13.7882 13.8192 14.0623C13.3349 14.4898 12.6969 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 11.3031 9.51022 10.6651 9.9377 10.1808C10.2118 9.87024 10.6858 9.84068 10.9963 10.1148Z" fill="#656579"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.97605 7.13065C8.21377 7.46987 8.13148 7.93756 7.79227 8.17527C6.34994 9.18602 5.10922 10.6018 3.92836 12.0468C4.80018 13.3203 5.94557 14.5632 7.25485 15.515C8.71857 16.579 10.345 17.25 12 17.25C13.3792 17.25 14.7385 16.7845 16.0036 16.0109C16.357 15.7948 16.8186 15.9061 17.0347 16.2595C17.2508 16.6129 17.1395 17.0745 16.7861 17.2906C15.3482 18.1699 13.7207 18.75 12 18.75C9.93668 18.75 8.00742 17.9165 6.37286 16.7283C4.73681 15.539 3.35379 13.9651 2.36584 12.4004C2.19433 12.1288 2.21485 11.7781 2.41688 11.5283C3.68966 9.95476 5.15131 8.19434 6.93144 6.94687C7.27065 6.70916 7.73834 6.79144 7.97605 7.13065Z" fill="#656579"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C16.4201 5.25 19.3286 8.74087 21.5831 11.5283C21.7851 11.7781 21.8057 12.1288 21.6342 12.4004C21.2998 12.9299 20.9213 13.4589 20.5044 13.9726C20.2433 14.2942 19.771 14.3434 19.4494 14.0824C19.1278 13.8213 19.0786 13.349 19.3396 13.0274C19.6012 12.7051 19.8458 12.3767 20.0715 12.0469C17.829 9.30551 15.4204 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6Z" fill="#656579"/>
                                            </svg>
                                        </div>
                                        <input className='w-[320px] h-[44px] py-[10px] pl-[40px] border rounded placeholder-[#23254C]' placeholder='**********' />
                                    </div>
                                </div>



                                <div className='flex flex-col gap-3 ml-[116px]'>

                                    <p className="text-[20px] font-bold mt-[16px]">Repetir Contraseña</p>

                                    <div className='relative flex items-center'>    
                                        <div className='absolute left-3 text-[#A1A0A0]'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46967 2.46967C2.76257 2.17678 3.23744 2.17678 3.53033 2.46967L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967Z" fill="#656579"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9963 10.1148C11.3069 10.3889 11.3364 10.8628 11.0623 11.1734C10.8674 11.3942 10.75 11.6825 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.3175 13.25 12.6058 13.1326 12.8266 12.9377C13.1372 12.6636 13.6111 12.6931 13.8852 13.0037C14.1593 13.3143 14.1298 13.7882 13.8192 14.0623C13.3349 14.4898 12.6969 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 11.3031 9.51022 10.6651 9.9377 10.1808C10.2118 9.87024 10.6858 9.84068 10.9963 10.1148Z" fill="#656579"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.97605 7.13065C8.21377 7.46987 8.13148 7.93756 7.79227 8.17527C6.34994 9.18602 5.10922 10.6018 3.92836 12.0468C4.80018 13.3203 5.94557 14.5632 7.25485 15.515C8.71857 16.579 10.345 17.25 12 17.25C13.3792 17.25 14.7385 16.7845 16.0036 16.0109C16.357 15.7948 16.8186 15.9061 17.0347 16.2595C17.2508 16.6129 17.1395 17.0745 16.7861 17.2906C15.3482 18.1699 13.7207 18.75 12 18.75C9.93668 18.75 8.00742 17.9165 6.37286 16.7283C4.73681 15.539 3.35379 13.9651 2.36584 12.4004C2.19433 12.1288 2.21485 11.7781 2.41688 11.5283C3.68966 9.95476 5.15131 8.19434 6.93144 6.94687C7.27065 6.70916 7.73834 6.79144 7.97605 7.13065Z" fill="#656579"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C16.4201 5.25 19.3286 8.74087 21.5831 11.5283C21.7851 11.7781 21.8057 12.1288 21.6342 12.4004C21.2998 12.9299 20.9213 13.4589 20.5044 13.9726C20.2433 14.2942 19.771 14.3434 19.4494 14.0824C19.1278 13.8213 19.0786 13.349 19.3396 13.0274C19.6012 12.7051 19.8458 12.3767 20.0715 12.0469C17.829 9.30551 15.4204 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6Z" fill="#656579"/>
                                            </svg>
                                        </div>
                                        <input className='w-[320px] h-[44px] py-[10px] pl-[40px] border rounded placeholder-[#23254C]' placeholder='**********' />
                                    </div>
                                    
                                </div>

                                </div>



                            </div>
                        </div>
                    </div>  
                
                </div>
                    <div className='flex w-[1047px] mt-[54px] ml-[47px] justify-end mb-[93px]'>
                        <button className='rounded text-white  w-[191px] h-[44px] bg-[#23254C]' >Guardar y Aceptar</button>    
                    </div>

            </div>
    </div>
    </>
  )
}

export default EditProfile
