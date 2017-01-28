import React from "react"
import { render } from "react-dom"
import Tabs from "../src/Tabs"

render(

  <Tabs style={ { margin : 15 } }>
    <div label="tab 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget dapibus mauris, mattis rhoncus orci. Nulla facilisi. Proin eget elementum nibh. Cras iaculis feugiat eros, nec sodales libero fermentum id. In euismod enim et mi elementum, eu rhoncus velit condimentum. Fusce quam massa, tempus sed velit lobortis, eleifend porttitor nulla. Fusce non sapien sed elit efficitur tincidunt.
    </div>
    <div label="tab 2">
      Suspendisse volutpat feugiat volutpat. Morbi dignissim commodo nisi, quis mollis lorem sagittis quis. Maecenas elementum mi ante, vel gravida velit pulvinar ut. Ut et dapibus urna. Vestibulum dignissim purus dolor, ut efficitur ligula dignissim eget. Sed eu sapien vitae augue sodales auctor at a massa. Nulla sed ipsum vel quam sodales pellentesque. Sed pulvinar mi ac velit imperdiet, nec finibus purus consectetur.
    </div>
    <div label="tab 3">
      Suspendisse enim diam, malesuada sed sapien sed, fermentum congue lorem. Vestibulum sit amet nulla leo. Phasellus lacus urna, tincidunt vitae dapibus vitae, suscipit vitae tortor. Praesent quis odio eget urna feugiat imperdiet vel nec erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras arcu tortor, vulputate sit amet massa in, blandit vehicula mi. Suspendisse a mattis urna. Aliquam id nisl et arcu iaculis aliquet vel non quam. Vivamus augue lorem, pulvinar id enim id, varius tincidunt risus. Sed tellus lectus, ornare at eros in, efficitur cursus neque. Pellentesque pretium dictum est vitae scelerisque. Nam sagittis nibh magna, vel convallis justo dapibus non. Suspendisse quam arcu, gravida ut ligula et, hendrerit hendrerit est.
    </div>
  </Tabs>,

  document.getElementById("content")
)
