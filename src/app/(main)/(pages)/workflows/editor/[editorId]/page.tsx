import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider, { EditorContext } from "@/providers/editor-provider";
import EditorCanvas from "./_components/editor-canvas";

const EditorPage = () => {

  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas/>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default EditorPage;