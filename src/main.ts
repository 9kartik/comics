import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <ol class="slider">
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Cover.png?v=1" alt="Cover"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Rock_pigeon.png?v=1" alt="Rock Dove Comic"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Compliment.png?v=1" alt="Compliment"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Drivers_license.png?v=1" alt="Drivers license"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Lizard.png?v=1" alt="Lizard Lizard on the wall"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Chargeable.png?v=1" alt="Chargeable"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Nails.png?v=1" alt="Nails growth"/>
    </li>
    <li>  
    <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Ex_wedding.png?v=1" alt="Wedding of the ex"/>
    </li>
    <li>  
    <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Marriage.png?v=1" alt="Marriage"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Child_power.png?v=1" alt="Children power"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Runner_nature.png?v=1" alt="Rock Dove Comic"/>
    </li>
    <li>  
      <h1>More coming soon...</h1>
    </li>
  </ol>
`;
