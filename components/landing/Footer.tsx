import {footerDataList} from "@/utils/data";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-10 mb-8 text-[rgba(255,255,255,0.7)] text-[14px] lg:text-[15px] border-t-[12px] border-[rgb(35,35,35)]">

            <div className="w-[90%] lg:w-4/5 mx-auto py-10 lg:py-14">
                <Link href={footerDataList[0].url} className="text-[15px] lg:text-[16px] underline decoration-[rgba(255,255,255,0.7)]">{footerDataList[0].text}</Link>

                <div className="mt-6 mb-8 grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-3 lg:gap-x-3 lg:gap-y-4">
                    {
                        footerDataList.slice(1).map(f => (
                            <Link key={f.text} href={f.url} target="_blank" className="underline decoration-[rgba(255,255,255,0.7)]">{f.text}</Link>
                        ))
                    }
                </div>

                <p className="no-underline">Netflix Hong Kong SAR China</p>
            </div>
        </footer>
    )
}

export default Footer;