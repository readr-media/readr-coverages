export default function buildContent(content, idx) {
  switch (content.type) {
    case 'unordered-list-item':
      return (
        <ul key={idx}>
          {content.value.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={idx} dangerouslySetInnerHTML={{ __html: content.value }}></p>
      );
  }
}
