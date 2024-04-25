import SocialIcons from "../../components/SocialIcons";


const Contact = () => {
  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>


<div className="w-full flex  gap-4 p-4 flex-wrap justify-center md:justify-between items-center text-white rounded overflow-hidden shadow-lg  bg-white/10 ">
      <div className="px-6 w-max text-xs md:text-lg  py-4 bg-black/40 text-white rounded-lg">
  <p className=" font-light"> Reach out to me via email:</p>
  <p className=" font-mono">chaitanyatoorubilli2409@gmail.com</p>
  
</div>

{/* socials */}
<SocialIcons/>
{/* socials */}

  <div className="  px-6 pt-4 pb-2 flex gap-3">
  <button 
       
       className=" hidden relative md:block h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
 <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
 <span className="  text-nowrap inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
 <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=chaitanyatoorubilli2409@gmail.com" target="_blank">Open Gmail web</a>
 </span>

</button>
  <button 
       
       className=" relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
 <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
 <span className=" text-nowrap inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
 <a href="mailto:chaitanyatoorubilli2409@gmail.com" target="_blank">Send Email</a>
 </span>

</button>


  
   
  </div>
</div>




    </section>
  );
};

export default Contact;
