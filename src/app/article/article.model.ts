export class Article
{
    votes:number;
    title:string;
    link:string;

  constructor(title:string, link:string, votes?:number) {
    this.title="Angular";
    this.link="http//angular.io";
    this.votes=votes || 10; 
  }

  voteup(){
    this.votes ++;
    

  }
  votedown(){
    this.votes --;
    

  } 
}