import Card from "../../../components/ui/card";

export default function badgeCard (){
    return (
        <div className="main"> 
            <div className="star"></div>
            <div className="badge-name">
                <h4>{}</h4>
            </div>
            <div className="bagde-conditions"></div>
        </div>
    )
}