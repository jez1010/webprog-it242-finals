import './Content.css';

function Content() {
  return (
    <div className = "yap_content">
      <div className = "title">
        About IBM
      </div>
      <div className = "content">
        <p>
        The International Business Machines Corporation, or simply IBM 
        is an American multinational technology company headquartered 
        in Armonk, New York, and present in over 175 countries. It was 
        founded in 1911 as the Computing-Tabulating-Recording Company 
        (CTR), a holding company of manufacturers of record-keeping and 
        measuring systems. It was renamed "International Business 
        Machines" in 1924.
        </p>
        <p>
        Since then, IBM has become a major corporation, and whilst it 
        has disappeared from the consumer computing scene after it sold 
        its minicomputer division to Lenovo in 2005, its impact still 
        remains today.
        </p>        
      </div>
      
      <div className = "title">
        Meet the Mainframes
      </div>
      <div className = "image_content">
        <div className = "content text_side">
          Whilst IBM has had a number of prominent mainframes, the most 
          recognizable and still existing line of mainframes started with 
          the System/360, also known as the S/360. Designed as an all-around 
          mainframe, it allows businesses to simply buy one type of computer, 
          that can be used in different applications— a customer would not need 
          to buy an engineering computer specifically to run an engineering 
          program, and with that same S/360, load a program for accounting. This 
          multi-purpose capability does make it attractive to its customers. During 
          its lifetime, IBM released several models, allowing it to remain updated 
          until the release of the System/370.
        </div>
        <div className = "image_side">
          <img 
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/IBM_system_360-50_console_-_MfK_Bern.jpg/1280px-IBM_system_360-50_console_-_MfK_Bern.jpg"
            alt = "S/360-50"
          />
          <div className = "sub_content">An S/360 Model 50 computer.</div>
        </div>
      </div>
      <div className = "image_content">
        <div className = "image_side">
          <img 
            src = "https://upload.wikimedia.org/wikipedia/commons/c/cd/IBM_System_370-145_und_Bandlaufwerke_2401.png"
            alt = "S/370-145"
          />
          <div className = "sub_content">An S/370 Model 145 computer with IBM 2401 tape drive.</div>
        </div>
        <div className = "content text_side">
          The System/370, or simply the S/370, was the next upgrade of the S/360 system. 
          Now using an update S/370 architecture that remained backward compatible with 
          S/360 architecture, the S/370 allowed businesses to keep their programs alive 
          and operation after transferring without having to modify much of their code. 
          The architecture primarily extends the previous S/360 architecture— thus an 
          S/360 code can run on an S/370, but not vice versa. Furthermore, the S/370 
          would also feature virtual memory addresses, allowing one to use both disk storage 
          and random access memory (RAM) to appear as one continuous set of addreseses.

          The next set of mainframes would primarily be identified not with a single mainframe 
          model, but by the architecture they use. The S/370 architecture would soon evolve with 
          the S/370-XA, providing a full use of the 31-bit virtual addressing instead of the 24-
          bit used in the S/360 and 370 models. S/370-XA would then be followed by the ESA/370 
          architecture, which soon became the basis for the ESA/390 and the System/390 series.
        </div>
      </div>
    </div>
  );
}

export default Content;