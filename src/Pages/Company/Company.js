import React from 'react'
import { useParams } from 'react-router-dom'
import './Company.css'
import img1 from '../../images/photo-1507297448044-a99b358cd06e.jpg'
import img2 from '../../images/clark-street-mercantile-P3pI6xzovu0-unsplash.png'

function Company() {
  const {section} = useParams()
  console.log(section)

  return (
    <section className='company' >
      {section === 'about-us' &&
      <div className="company-about-us">
        <h2 className="company__header">About Us</h2>
        <div className="company-about-us__wrapper">
          <img className="company-about-us__img" src={img1} />
          <div className="company-about-us__desc">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos pariatur laudantium, eligendi, nihil explicabo optio incidunt maiores dolorum at facere tempora et facilis minima ut ullam voluptatem magnam eius cumque modi nam est, iste voluptatibus consectetur. Id ex aliquam illum atque sequi, ratione unde! Adipisci saepe minima assumenda aliquam cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eaque cumque beatae vitae qui accusamus delectus facere asperiores consequuntur et architecto, facilis, perspiciatis natus aliquid aspernatur cupiditate? Iusto autem nemo quae accusamus dignissimos? Doloribus iure dolores quidem aliquid debitis harum quia fugiat libero adipisci corporis nulla rerum eos iusto nesciunt, alias cum magni deleniti ducimus dolorem doloremque, sunt similique. Temporibus ipsam quia dolorum aliquam alias non labore perspiciatis eius fugit dolor praesentium esse sunt iusto, quo blanditiis distinctio! Sit, laboriosam quo. Consequatur quos doloribus rerum nostrum in nemo culpa eos mollitia, adipisci magni similique? Hic soluta odit fuga sunt cupiditate?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse cumque quia aut qui porro repudiandae dignissimos accusamus tempore. Velit porro neque culpa placeat atque odio, consequatur ea, nihil architecto quisquam, voluptatum asperiores ad? Tenetur nihil quod deleniti dolore id, ipsa saepe repellendus fugit pariatur quis nam, dolorem esse nobis voluptatibus illum commodi eos consequatur veniam similique maxime labore ab.</p>
          </div>
    </div>
        <div className="company-about-us__wrapper">
          <div className="company-about-us__desc">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos pariatur laudantium, eligendi, nihil explicabo optio incidunt maiores dolorum at facere tempora et facilis minima ut ullam voluptatem magnam eius cumque modi nam est, iste voluptatibus consectetur. Id ex aliquam illum atque sequi, ratione unde! Adipisci saepe minima assumenda aliquam cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora pariatur deleniti impedit ipsa totam, officiis repellendus dolorum aut eligendi odit numquam accusantium, enim beatae sed nisi eius dicta quas minima mollitia? Neque reiciendis dolore minima odio animi magni beatae enim perspiciatis amet natus, suscipit, omnis tempora tenetur, voluptas voluptate! Voluptate tempore similique neque quisquam recusandae nihil ullam necessitatibus nesciunt incidunt velit? Deleniti iusto deserunt architecto nesciunt expedita, delectus odio inventore facere nobis, suscipit ipsam aut accusamus? Non maxime excepturi fugit velit iste consequuntur tenetur reiciendis voluptatibus quo mollitia quasi beatae voluptate laboriosam dignissimos, sequi commodi veniam praesentium iusto dolore sint temporibus animi aspernatur illum veritatis. Quo temporibus libero molestiae voluptatibus sed! Provident consectetur, repudiandae enim ipsum earum nulla, dicta hic in, aliquam optio placeat veniam officia ratione vitae itaque harum beatae consequuntur. Beatae provident ipsum facere numquam, corporis optio doloremque vel. In quidem earum eveniet unde assumenda sequi numquam facere?</p>
          </div>
          <img className="company-about-us__img" src={img2} />
    </div>
      </div>
      }
      { section === 'faqs' &&
      <div className="company-faq">
        <h2 className="company__header">FAQs</h2>
        <div className="company-faq__question">
          <h3>Lorem ipsum dolor sit amet?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum accusamus dolorum facilis ex autem numquam sapiente alias consequatur aliquid ea.</p>
        </div>
        <div className="company-faq__question">
          <h3>Distinctio corporis expedita dignissimos?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi ducimus earum voluptatum, eius laborum natus perferendis non possimus debitis, atque accusamus tempore ipsum quaerat maiores consequuntur quam accusantium expedita!</p>
        </div>
        <div className="company-faq__question">
          <h3>Incidunt, maiores! Similique, saepe nulla?</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam corporis, hic quisquam maiores doloremque deleniti quod sit cupiditate eos mollitia reprehenderit.</p>
        </div>
        <div className="company-faq__question">
          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, beatae?</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea cupiditate tempore dolor! Dolorem sequi ullam earum sunt suscipit neque dolor aut! Consequuntur fugit vitae, sapiente veritatis non animi alias?</p>
        </div>
        <div className="company-faq__question">
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit cum modi quaerat a est?</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, dolores corporis exercitationem, non amet illo est saepe earum, qui temporibus laudantium eveniet. Quae magnam soluta ut itaque necessitatibus. Hic alias veritatis sed quam, at eaque tenetur rem quidem, id, adipisci quas atque sint sit!</p>
        </div>
      </div>
      }
      { section === 'contact' &&
      <div className="company-contact">
        <h2 className="company__header">Contact</h2>
        <div className="company-contact__desc">
          <h3>Call Us</h3>
          <div className='company-contact__items'>
            <h4>+48 123 123 123</h4>
          </div>
          <h3>Opening Hours</h3>
          <div className='company-contact__items'>
          <h4>Monday - Friday: 9am-8pm</h4>
          <h4>Saturday: 9am-5pm</h4>
          <h4>Sunday: Closed</h4>
          </div>
          <h3>Chat with us on social media</h3>
          <div className='company-contact__items'>
          <h4><a href='https://www.facebook.com/' target='_blank'>Facebook</a></h4>
          <h4><a href='https://www.instagram.com/' target='_blank'>Instagram</a></h4>
          <h4><a href='https://twitter.com/' target='_blank'>Twitter</a></h4>
          </div>
        </div>
      </div>
      }
    </section>
  )
}

export default Company