interface AnnotationCardProps {

  // Collapsed annotation cards 
  collapsed?: boolean;

  // Selected annotation cards have different
  // visual style and show the reply field
  selected?: boolean; 

}

export const AnnotationCard = (props: AnnotationCardProps) => {

}
const isSelected = false; // selected annotation shows reply field

const isCollapsed = false; // collapsed annotation shows only header
---

<article>
  <header>
    <!-- avatar -->
    <!-- username -->
    <!-- time ago -->
    <!-- 'more' menu -->
  </header>

  <p>
    <!-- content -->
  </p>

  <ul>
    <!-- tags -->
  </ul>
</article>