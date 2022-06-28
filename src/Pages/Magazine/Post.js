import React from 'react'
import {useParams} from 'react-router-dom'
import posts from '../../posts';
import './Post.css'

function Post() {
  const {id} = useParams()
  const post = posts.find(item => item.id === id)

  return (
    <section className='full-post'>
      <div className="full-post__wrapper">
        <img className='full-post__img' src={post.img} alt="" />
        <span className='full-post__date'>{post.addedDate}</span>
      </div>
      <div className="full-post__header">
      <h2 className='full-post__category'>{post.category}</h2>
      <h1 className='full-post__title'>{post.title}</h1>
      </div>
      <p className="full-post__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sapiente aspernatur quod dolor voluptates officia dignissimos fugit ipsam iste dolorum, eaque amet. Iste recusandae dolor vitae laboriosam reiciendis repellendus eveniet quas quos, hic, porro inventore laborum explicabo expedita consequuntur, alias voluptatum nobis autem commodi sed cupiditate libero facilis esse voluptates doloremque! Dolorum, harum, cumque in aspernatur quis obcaecati consectetur pariatur error vitae eius, esse labore reprehenderit neque nulla odit aut fuga velit ipsum ad delectus aliquam recusandae eligendi natus! Quia excepturi beatae, fugiat maxime dolorum temporibus quas ut odio cupiditate praesentium. Numquam autem officia quidem libero molestiae et aliquam reiciendis.</p>
      <p className="full-post__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti autem saepe accusamus harum delectus, eum eveniet ad totam molestiae, ducimus in repudiandae minus at voluptatibus recusandae placeat esse. Unde tempore odio voluptate est quas facere fugit dolorem modi! Officiis dolorum consequatur quisquam eos repellendus ex numquam deserunt vitae est ut sequi ab omnis ullam ipsa velit perferendis inventore natus laborum alias, quae quibusdam! Perspiciatis sapiente, molestiae unde impedit exercitationem itaque vero sit eligendi pariatur vitae quos nostrum repellendus voluptatum cupiditate laboriosam, quibusdam consequatur natus tenetur officiis voluptatibus? Voluptatum, tempora nam ex voluptate eaque accusantium ipsum saepe rerum hic enim sunt laborum esse laboriosam quis in minima recusandae exercitationem voluptatem delectus repudiandae itaque quisquam. Ab aut eius voluptates, expedita odio at neque quia. Non cupiditate alias blanditiis, velit provident rerum nihil nostrum maxime dolor fuga ab eum sequi totam distinctio pariatur nam cumque laborum id fugiat incidunt. Consectetur accusamus consequuntur facilis!</p>
      <p className="full-post__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum temporibus repellat necessitatibus et modi culpa optio corrupti odit voluptates in, unde doloremque dicta debitis voluptate natus, dignissimos quasi delectus libero omnis atque nemo assumenda sed porro? Saepe assumenda cum perferendis iusto tempore voluptatibus quia delectus, id voluptatem nostrum culpa? Eos voluptas, exercitationem magnam illo minima amet veritatis excepturi odit sed repellat adipisci ipsum voluptate aperiam laudantium doloremque numquam nam, quod iusto sint cumque tenetur praesentium qui! Temporibus ea, veniam saepe ullam id, minima consectetur necessitatibus blanditiis sunt error doloribus dolorum eveniet magni explicabo eum quisquam hic expedita natus! Ut obcaecati impedit molestiae totam eveniet vel consectetur consequuntur dolorum iusto earum nisi modi non minima odio corporis aliquid, optio cum, magnam, aut amet!</p>
      <p className="full-post__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia magnam possimus assumenda vero. Perferendis sed nisi alias maxime pariatur ut culpa amet tempora vel enim, inventore harum distinctio iure quidem!</p>
    </section>
  )
}

export default Post