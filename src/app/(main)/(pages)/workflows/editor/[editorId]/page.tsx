import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider, { EditorContext } from "@/providers/editor-provider";

const EditorPage = () => {

  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <></>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default EditorPage;