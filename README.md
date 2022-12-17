##### future ####
- Pin location
- Display location
- post {wait update}
- create Album(1 images wait update)
- tracking me(test)

                 <!-- ***************************************************************
                ******************************** Chat ******************************
                ******************************************************************** -->
                <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
                    <div class="h-full">
                        <!-- Card -->
                        <div class="relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg">
                            <!-- Card header -->
                            <header class="pt-6 pb-4 px-5 border-b border-gray-200">
                                <div class="flex justify-between items-center mb-3">
                                    <!-- Image + name -->
                                    <div class="flex items-center">
                                        <a class="inline-flex items-start mr-3" href="#0">
                                            <img class="rounded-full" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-48-01_nugblk.jpg" width="48" height="48" alt="..." />
                                        </a>
                                        <div class="pr-1">
                                            <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                                <h2 class="text-xl leading-snug font-bold">Mike</h2>
                                            </a>
                                            <a class="block text-sm font-medium hover:text-indigo-500" href="#0">@lauren.mars</a>
                                        </div>
                                    </div>
                                    <!-- Popup menu -->
                                    <div data-dial-init class="absolute hover:z-50 inline-flex flex-shrink-0 right-4 top-6">
                                        <div id="speed-dial-menu-dropdown-alternative-square" class="absolute top-0 right-5 flex hidden flex-col justify-end space-y-2 bg-white border border-gray-100 shadow-sm dark:bg-gray-700 dark:border-gray-600 shadow-md">
                                            <ul class="text-sm text-gray-500 dark:text-gray-300">
                                            <!-- ***************************************************************
                                            *************************** User Setting ***************************
                                            ******************************************************************** -->
                                                <li>
                                                    <a data-modal-toggle="medium-modal" href="#" class="flex items-center py-2 px-5 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white dark:border-gray-600">
                                                        <svg aria-hidden="true" class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 30 30"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M22.14001 6.64001C22.14001 3.25 19.38.5 16 .5S9.85999 3.25 9.85999 6.64001c0 3.37994 2.76001 6.12994 6.14001 6.12994S22.14001 10.01996 22.14001 6.64001zM4.04999 26.45001V30c0 .82996.66998 1.5 1.5 1.5h20.90002c.83002 0 1.5-.67004 1.5-1.5v-3.54999C27.95001 19.85999 22.59003 14.5 16 14.5S4.04999 19.85999 4.04999 26.45001z" clip-rule="evenodd"/></svg>
                                                        <span class="text-xs font-medium">User&nbsp;Setting</span>
                                                    </a>
                                                </li>
                                                <!-- Default Modal -->
                                                <div id="medium-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                                                    <div class="relative w-full h-full max-w-4xl md:h-auto">
                                                        <!-- Modal content -->
                                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                            <!-- Modal header -->
                                                            <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                                                <h4 class="text-base font-medium text-gray-900 dark:text-white">
                                                                    User Setting
                                                                </h4>
                                                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xs p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="medium-modal">
                                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                    <span class="sr-only">Close modal</span> 
                                                                </button>
                                                            </div>
                                                            <!-- Modal body -->
                                                            <form class="space-y-6" action="#">
                                                                <div class="p-6 text-left grid grid-cols-2 gap-2">
                                                                    <div>
                                                                        <label for="text" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Your name</label>
                                                                        <input type="text" name="text" id="txtName" placeholder="Your name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                                                    </div>
                                                                    <div>
                                                                        <label for="text" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Your name</label>
                                                                        <input type="text" name="text" id="txtName" placeholder="Your name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                                                    </div>
                                                                    <div>
                                                                        <label for="text" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Your name</label>
                                                                        <input type="text" name="text" id="txtName" placeholder="Your name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <!-- Modal footer -->
                                                            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                                <button id="userSet" data-modal-toggle="medium-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                                                                <button data-modal-toggle="medium-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            <!-- ***************************************************************
                                            ************************* End User Setting *************************
                                            ******************************************************************** -->
                                                <li>
                                                    <a href="#" class="flex items-center py-2 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white">
                                                        <svg aria-hidden="true" class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path></svg>
                                                        <span class="text-xs font-medium">Add&nbsp;comment</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- Settings button -->
                                            <button type="button" data-dial-toggle="speed-dial-menu-dropdown-alternative-square" aria-controls="speed-dial-menu-dropdown-alternative-square" aria-expanded="false" class="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                                                <span class="sr-only">Settings</span>
                                                <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                                    <path d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                                </svg>
                                            </button>
                                    </div>
                                </div>
                                <!-- User Info -->
                                <div class="flex flex-wrap justify-center sm:justify-start space-x-4">
                                    <div class="flex items-center">
                                        <svg class="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,14a1,1,0,1,0-1-1A1,1,0,0,0,12,14Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,14Zm-5,4a1,1,0,1,0-1-1A1,1,0,0,0,12,18Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,18ZM7,14a1,1,0,1,0-1-1A1,1,0,0,0,7,14ZM19,4H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20ZM20,8H4V7A1,1,0,0,1,5,6H19a1,1,0,0,1,1,1ZM7,18a1,1,0,1,0-1-1A1,1,0,0,0,7,18Z"/></svg>
                                        <span id="posDate" class="text-sm whitespace-nowrap ml-2">Dec 09 2022 17:02</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                                            <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                                        </svg>
                                        <a class="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2" href="#0">carolinmcneail.com</a>
                                    </div>
                                </div>
                            </header>
                            <!-- Card body -->
                            <div class="py-3 px-5">
                                <h3 class="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>
                                <!-- Chat list -->
                                <div class="divide-y divide-gray-200">
                                    <!-- User -->
                                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                        <div class="flex items-center">
                                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg" width="32" height="32" alt="Marie Zulfikar" />
                                            <div>
                                                <h4 class="text-sm font-semibold text-gray-900">Marie Zulfikar</h4>
                                                <div class="text-[13px]">The video chat ended · 2hrs</div>
                                            </div>
                                        </div>
                                    </button>
                                    <!-- User -->
                                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                        <div class="flex items-center">
                                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg" width="32" height="32" alt="Nhu Cassel" />
                                            <div>
                                                <h4 class="text-sm font-semibold text-gray-900">Nhu Cassel</h4>
                                                <div class="text-[13px]">Hello Lauren 👋, · 24 Mar</div>
                                            </div>
                                        </div>
                                    </button>
                                    <!-- User -->
                                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                        <div class="flex items-center">
                                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-03_uzwykl.jpg" width="32" height="32" alt="Patrick Friedman" />
                                            <div>
                                                <h4 class="text-sm font-semibold text-gray-900">Patrick Friedman</h4>
                                                <div class="text-[13px]">Yes, you’re right but… · 14 Mar</div>
                                            </div>
                                        </div>
                                    </button>
                                    <!-- User -->
                                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                        <div class="flex items-center">
                                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-04_ttlftd.jpg" width="32" height="32" alt="Byrne McKenzie" />
                                            <div>
                                                <h4 class="text-sm font-semibold text-gray-900">Byrne McKenzie</h4>
                                                <div class="text-[13px]">Hey Lauren ✨, first of all… · 14 Mar</div>
                                            </div>
                                        </div>
                                    </button>
                                    <!-- User -->
                                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                        <div class="flex items-center">
                                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-05_bktgmb.jpg" width="32" height="32" alt="Scott Micheal" />
                                            <div>
                                                <h4 class="text-sm font-semibold text-gray-900">Scott Micheal</h4>
                                                <div class="text-[13px]">No way 🤙! · 11 Mar</div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <!-- Bottom right button -->
                            <!-- <button class="absolute bottom-5 right-5 inline-flex items-center text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2">
                                <svg class="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
                                    <path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
                                </svg>
                                <span>New Chat</span>
                            </button> -->
                        </div>
                    </div>
                </section>
                <!-- ***************************************************************
                ****************************** End Chat ****************************
                ******************************************************************** -->
