export function SampleRendering({ dataSource }) {
    return (
      <div>
        <h1 className="contentTitle">{dataSource.Title}</h1>
  
        {/* rich text field needs to be rendered via dangerouslySetInnerHTML */}
        <div className="contentDescription" dangerouslySetInnerHTML={{ __html: dataSource.Text }}></div>
      </div>
    );
  }