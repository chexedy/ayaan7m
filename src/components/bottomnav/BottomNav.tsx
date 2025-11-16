import "./BottomNav.css";
import { FaRegCopyright } from "react-icons/fa";

export default function BottomNav() {
    return (
        <div className="bottom-nav">
            <FaRegCopyright style={{ color: "white" }} />
            <span>&nbsp; chexedy incorporated (it's real trust)</span>
        </div>
    )
}