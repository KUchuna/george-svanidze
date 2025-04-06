import Image from "next/image"

export default function Footer() {

    return (
        <footer className="bg-black dark:bg-[#232323] lg:pt-[10.625rem] lg:pb-[13.75rem] lg:px-8 pt-[74px] pb-10 px-1 flex lg:flex-row flex-col justify-between mt-auto font-grotesk gap-[74px] lg:gap-0">
             <div className="flex lg:gap-8 gap-4 w-full">
                <Image src="/pictures/giorgi.jpeg" alt="Giorgi Svanidze" width={246} height={246} className="lg:rounded-3xl rounded-2xl object-cover lg:max-w-[246px] lg:max-h-[246px] lg:min-w-[246px] lg:min-h-[246px] max-w-[72px] max-h-[72px] min-w-[72px] min-h-[72px] w-full h-full select-none" unoptimized/>
                <div className="h-full flex justify-between flex-col font-medium text-gray-2 lg:text-[4rem] text-xl w-full lg:leading-none">
                    <span className="w-fit">Feel free to reach out for any</span>
                    <span className="w-fit">collaboration opportunities at</span>
                    <a href="mailto:g.svanidze95@gmail.com" className="no-underline text-white w-fit">g.svanidze95@gmail.com</a>
                </div>
             </div>
             <div className="flex lg:flex-col flex-col-reverse items-end gap-6">
                <div className="flex gap-3">
                    <a className="lg:h-[128px] lg:w-[128px] h-[64px] w-[64px] bg-gray-2 dark:bg-black flex justify-center items-center rounded-2xl" href="https://www.linkedin.com/in/giorgi-svanidze-b3b1091a2/" target="#">
                        <svg viewBox="0 0 92 92" className="w-[22px] h-[22px] lg:w-[92px] lg:h-[92px] fill-current dark:text-white"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.2784 27.8649C36.2784 30.5518 33.9495 32.7299 31.0767 32.7299C28.2039 32.7299 25.875 30.5518 25.875 27.8649C25.875 25.1781 28.2039 23 31.0767 23C33.9495 23 36.2784 25.1781 36.2784 27.8649Z"/>
                            <path d="M26.5863 36.3058H35.4781V63.25H26.5863V36.3058Z"/>
                            <path d="M49.7938 36.3058H40.9021V63.25H49.7938C49.7938 63.25 49.7938 54.7676 49.7938 49.464C49.7938 46.2807 50.8808 43.0834 55.2178 43.0834C60.1192 43.0834 60.0897 47.2493 60.0668 50.4766C60.0369 54.6953 60.1082 59.0003 60.1082 63.25H69V49.0294C68.9247 39.9492 66.5586 35.7652 58.7745 35.7652C54.1518 35.7652 51.2863 37.8639 49.7938 39.7627V36.3058Z"/>
                        </svg>
                    </a>
                    <a className="lg:h-[128px] lg:w-[128px] h-[64px] w-[64px] bg-gray-2 dark:bg-black flex justify-center items-center rounded-2xl" href="https://dribbble.com/GeorgeSvanidze" target="##">
                        <svg viewBox="0 0 56 57" className="w-[22px] h-[22px] lg:w-[56px] lg:h-[56px] fill-current dark:text-white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M52.5 28.5C52.5 42.031 41.531 53 28 53C14.469 53 3.5 42.031 3.5 28.5C3.5 14.969 14.469 4 28 4C41.531 4 52.5 14.969 52.5 28.5ZM36.617 47.6563C33.9878 48.8409 31.0709 49.5 28 49.5C22.9304 49.5 18.2803 47.7036 14.6517 44.7126C18.4265 38.3782 24.498 33.5755 31.7153 31.4507C33.7883 36.6517 35.4364 42.0679 36.617 47.6563ZM39.8102 45.8668C38.6472 40.6365 37.0878 35.5556 35.1653 30.6573C36.7657 30.3894 38.4096 30.25 40.0859 30.25C43.114 30.25 46.0332 30.7044 48.7805 31.5477C47.9163 37.4919 44.5621 42.629 39.8102 45.8668ZM48.9933 27.9633C46.1577 27.1724 43.17 26.75 40.0859 26.75C37.9361 26.75 35.8342 26.9551 33.7988 27.3466C33.2679 26.1214 32.714 24.9085 32.1375 23.7085C36.7192 21.6748 40.9535 19.0007 44.726 15.8001C47.3071 19.1942 48.8787 23.3978 48.9933 27.9633ZM42.3826 13.1982C38.8408 16.1902 34.8666 18.6852 30.5668 20.5761C28.297 16.2357 25.728 12.0768 22.8872 8.12678C24.5238 7.71737 26.2365 7.5 28 7.5C33.5652 7.5 38.6248 9.66479 42.3826 13.1982ZM19.4294 9.32282C13.2645 12.0822 8.67312 17.727 7.37292 24.5395C8.56762 24.6272 9.77456 24.6719 10.9922 24.6719C16.7111 24.6719 22.1988 23.6861 27.2955 21.8748C24.9806 17.4875 22.3485 13.2933 19.4294 9.32282ZM7.00534 28.0218C7.00179 28.1807 7 28.3402 7 28.5C7 33.7361 8.91631 38.5245 12.0859 42.2024C16.2611 35.5863 22.7185 30.5511 30.3542 28.2045C29.8828 27.1337 29.393 26.0728 28.8855 25.0222C23.3043 27.0599 17.2777 28.1719 10.9922 28.1719C9.65113 28.1719 8.32155 28.1213 7.00534 28.0218Z"/>
                        </svg>
                    </a>
                </div>
                <span className="lg:text-5xl text-xl w-max text-white">Tbilisi, Georgia</span>
             </div>
        </footer>
    )
}