import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  TAG:String = "PortfolioComponent -";
  isImageExpanded:Boolean=false;
  expandedImage:String="";
  index=0;

  thumbnailUrl: String[] = [
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539589/diana_wedding/_IEN0490.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539589/diana_wedding/_IEN0574.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539589/diana_wedding/018.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539589/diana_wedding/1253.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539589/diana_wedding/1206.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539589/diana_wedding/1181.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539589/diana_wedding/1180.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524541497/diana_wedding/0290_RheeBeverePhotography_ClientHasReprintRights.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524541428/diana_wedding/0381_RheeBeverePhotography_ClientHasReprintRights.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539594/diana_wedding/10818389_10152495310716537_7997548052130224620_o.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539597/diana_wedding/10857098_10152495310721537_8642102523874411626_o.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539595/diana_wedding/12307929_883911918325250_1460314118300733700_o.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539595/diana_wedding/12362-m_t_m_0320.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539605/diana_wedding/160514-1702-26014.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1519008587/diana_wedding/19250687_141727154834.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539593/diana_wedding/2016-06-01_0136.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539597/diana_wedding/20545241_10103274285692349_3795681731462709139_o.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539544/diana_wedding/2CKFirstLookBrideGroomPortraits-106.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539616/diana_wedding/Diana_Dorsey_Favorites-0115.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539611/diana_wedding/Diana_Dorsey_Favorites-0088.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539603/diana_wedding/Diana_Dorsey_Favorites-0084.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539608/diana_wedding/Diana_Dorsey_Favorites-0033.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539519/diana_wedding/6CKDetails-63.jpg",    
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524541498/diana_wedding/DSC_1595.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539673/diana_wedding/DSC_1912.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524541430/diana_wedding/Mary-Josh-Wedding-0113.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539720/diana_wedding/IMG_9024.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539987/diana_wedding/Ursula_Dan_Orr_Wedding_9_4_2016_img17.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539971/diana_wedding/WRP_BA547.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539978/diana_wedding/WRP_KM683.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539988/diana_wedding/WRP_KM816.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539992/diana_wedding/WRP_KM898.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_280,q_60,c_limit/v1524539589/diana_wedding/087.jpg",  
  ];

  expandImageUrl:String[]=[
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539589/diana_wedding/_IEN0490.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539589/diana_wedding/_IEN0574.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539589/diana_wedding/018.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539589/diana_wedding/1253.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539589/diana_wedding/1206.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539589/diana_wedding/1181.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539589/diana_wedding/1180.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524541497/diana_wedding/0290_RheeBeverePhotography_ClientHasReprintRights.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524541428/diana_wedding/0381_RheeBeverePhotography_ClientHasReprintRights.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539594/diana_wedding/10818389_10152495310716537_7997548052130224620_o.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539597/diana_wedding/10857098_10152495310721537_8642102523874411626_o.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539595/diana_wedding/12307929_883911918325250_1460314118300733700_o.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539595/diana_wedding/12362-m_t_m_0320.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539605/diana_wedding/160514-1702-26014.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1519008587/diana_wedding/19250687_141727154834.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539593/diana_wedding/2016-06-01_0136.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539597/diana_wedding/20545241_10103274285692349_3795681731462709139_o.jpg",  
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539544/diana_wedding/2CKFirstLookBrideGroomPortraits-106.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539616/diana_wedding/Diana_Dorsey_Favorites-0115.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539611/diana_wedding/Diana_Dorsey_Favorites-0088.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539603/diana_wedding/Diana_Dorsey_Favorites-0084.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539608/diana_wedding/Diana_Dorsey_Favorites-0033.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539519/diana_wedding/6CKDetails-63.jpg",    
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524541498/diana_wedding/DSC_1595.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539673/diana_wedding/DSC_1912.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524541430/diana_wedding/Mary-Josh-Wedding-0113.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539720/diana_wedding/IMG_9024.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539987/diana_wedding/Ursula_Dan_Orr_Wedding_9_4_2016_img17.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539971/diana_wedding/WRP_BA547.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539978/diana_wedding/WRP_KM683.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539988/diana_wedding/WRP_KM816.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539992/diana_wedding/WRP_KM898.jpg",
    "http://res.cloudinary.com/dustxxgvx/image/upload/w_1400,q_80,c_limit/v1524539589/diana_wedding/087.jpg"

  ]

  col1Counter=[];
  col2Counter=[];
  col3Counter=[];

  constructor() { }

  ngOnInit() {
    this.col1Counter = new Array(Math.round(this.thumbnailUrl.length/3)).fill(0).map((x,i)=>i);
    this.col2Counter = new Array(Math.round(this.thumbnailUrl.length/3)).fill(0).map((x,i)=>i+(this.thumbnailUrl.length/3));
    this.col3Counter = new Array(Math.round(this.thumbnailUrl.length/3)).fill(0).map((x,i)=>i+(this.thumbnailUrl.length*2/3));
  }


  onImageClicked(index:number, event){
    console.log("on image clicked fired");
    this.isImageExpanded=true;
    this.index=index;
    this.expandedImage = this.expandImageUrl[index];
    event.stopPropagation();
  }

  onImageHide(){
    this.isImageExpanded=false;
  }

  onBackPressed(event){
    this.expandedImage=this.expandImageUrl[--this.index];
    event.stopPropagation();
  }

  onNextPressed(event){
    this.expandedImage=this.expandImageUrl[++this.index];
    event.stopPropagation();
  }

}
