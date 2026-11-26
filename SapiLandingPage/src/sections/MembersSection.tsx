import MemberCard, { type MemberCardProps } from "../components/MemberCard";
import MemberCardFrescurinha from "../components/MemberCardFrescurinha";
import members from "../data/membersData.json"

export default function MembersSection(){

    const memberList : MemberCardProps[] = members; 

    return(
        <section className="flex flex-col w-full p-10 gap-10">
            
            <h1 className="border-l-4 border-[#76FD00] uppercase text-[36px] pl-4 text-[#FEFFFE]"> nossos membros </h1>
            
            <div className="relative flex flex-wrap justify-center gap-6">
                {   
                    memberList.map((member) => (
                        <MemberCard {...member}/>
                    ))
                }   
                {
                    memberList.map((member) => (
                        <MemberCardFrescurinha {...member}/>
                    ))   
                }
            </div>

        </section>
    );

}