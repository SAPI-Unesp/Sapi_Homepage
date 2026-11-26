import github_icon from "../assets/Github.png"
import instagram_icon from "../assets/Instagram.png"
import linkedin_icon from "../assets/Linkedin.png"

export interface MemberCardProps {
    name : string,
    nickname : string,
    phrase : string,
    description : string,
    photo_path : string,
    links : string[]
}

export default function MemberCard({ name, nickname, phrase, description, links, photo_path} : MemberCardProps){

    return(
        <div className="relative flex flex-col w-101.25 h-137.5 p-5 shadow-[0_0px_20px_2px] shadow-olive-950 rounded-lg align-middle items-center text-center">

            
            <img src={photo_path} className="w-80.75 h-58.5 rounded-bl-[120px] rounded-tr-[120px]" />

            <label className="text-[#76FD00] border-b-2 border-[#76FD00] w-[90%] text-center p-3"> "{phrase}" </label>

            <label className="text-[#E6EBE1] text-[25px] mt-5"> {name} </label>
            <label className="text-[#76FD00] text-[20px]"> "{nickname}" </label>

            <label className="text-[#C0CCB6] text-[14px] max-w-80.75 "> {description} </label>

            <div className="absolute bottom-4 right-4 flex flex-row-reverse w-full gap-4 "> 
                <img src={github_icon} title={links[0]} className="w-6 h-6" />
                <img src={instagram_icon} className="w-6 h-6" />
                <img src={linkedin_icon} className="w-6 h-6" />
            </div>

        </div>  
    );


}