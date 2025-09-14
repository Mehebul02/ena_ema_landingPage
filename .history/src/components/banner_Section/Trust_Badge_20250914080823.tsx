import { trust } from "@/assets"
import Image from "next/image"

export function TrustBadge() {
    return (
        <div className="flex lg:w-[434px] mx-auto items-center pt-[8px] py-[16px] justify-center gap-2 px-4 bg-[#192420] border-t-2 border-[#1fffA5] text-white rounded-full text-sm font-medium">
            <div className="w-4 h-4 text-emerald-400" >
                <Image src={trust} alt="Trust Badge" width={20} height={20} />
            </div>
            <span>Trusted by 30+ startups & entrepreneurs worldwide</span>
        </div>
    )
}