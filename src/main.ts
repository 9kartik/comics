import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <ol class="slider">
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Cover.png" alt="Cover"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Rock_pigeon.png" alt="Rock Dove Comic"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Compliment.png" alt="Compliment"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Drivers_license.png" alt="Drivers license"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Lizard.png" alt="Lizard Lizard on the wall"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Chargeable.png" alt="Chargeable"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Nails.png" alt="Nails growth"/>
    </li>
    <li>  
    <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Ex_wedding.png" alt="Wedding of the ex"/>
    </li>
    <li>  
    <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Marriage.png" alt="Marriage"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Child_power.png" alt="Children power"/>
    </li>
    <li>  
      <img loading="lazy" src="https://some-imgs.s3.ap-south-1.amazonaws.com/comics/Runner_nature.png" alt="Rock Dove Comic"/>
    </li>
    <li>  
      <h1>More coming soon...</h1>
    </li>
  </ol>
`;
