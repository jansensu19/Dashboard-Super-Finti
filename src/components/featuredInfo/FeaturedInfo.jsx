import "./featureInfo.css"
import {AccountBalanceWallet, ExpandMore, Help} from "@material-ui/icons"
import mastercard from "./mastercard-logo.png"

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem purple">
            <div className="featuredItemInfos">
            <span className="featuredTitle">Your Working Balance</span>
            <span className="featuredSubTitle">Saving Account</span>
            </div>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">PKR 9,250,000</span>
                <span className="featuredMoneyRate">
                    PKR<ExpandMore className="featuredIcon"/>
                </span>
            </div>
        </div>

        <div className="featuredItem yellow">
            <div className="featuredItemInfos">
            <span className="featuredTitle">Your Saving Status</span>
            <span className="featuredSubTitle"><Help className="featuredSubIcon"/></span>
            </div>
            <div className="featuredMoneyContainer">
                <div className="featuredWalletContainer">
                        <AccountBalanceWallet className="featuredWalletIcon"/>
                </div>
                <div className="featuredMoneyInfoContainer">
                    <span className="featuredMoney negative">4.28%</span>
                    <span className="featuredSub">Your spending increased</span>
                </div>
            </div>
            
        </div>

        <div className="featuredItem green">
            <span className="featuredTitle">
                <img src={mastercard} alt="" className="featuredTitleImg"/>
                </span>
            <div className="featuredMoneyContainer vertical">
                <span className="featuredSmTitle">CARD NUMBER</span>
                <span className="featuredMoney">3829 4820 4629 5025</span>
            </div>
            <div className="featuredInfoCard">
                <div className="featuredInfoUserMoney">
                    <span className="featuredSmTitle">CARD NUMBER</span>
                    <span className="featuredSub">Anita Rose</span>
                </div>
                <div className="featuredInfoUserMoney">
                    <span className="featuredSmTitle">VAID THRU</span>
                    <span className="featuredSub">09/17</span>
                </div>
            </div>
        </div>
    </div>
  )
}
