import { FormGroup, TextField } from "@mui/material";
import { useTree } from "../context/tree.context";
import { IStat } from "../utils/stats.type";
import Switch from "./Switch";

export default function StatForm() {
  const { selected } = useTree();

  if (!selected)
    return <div className="p-4">Select something in left sidebar</div>;

  function renderInput(key: string, parm: IStat["parms"][number]) {
    switch (parm.type) {
      case "_empty":
        return (
          <div className="w-full flex gap-2">
            <div className="w-1/3">{key}</div>
            <div className="w-2/3 text-gray-400 italic">(empty)</div>
          </div>
        );
      case "bool":
        return (
          <div className="w-full flex gap-2">
            <div className="w-1/3">{key}</div>
            <div className="w-2/3 text-gray-400 italic">
              <Switch value={parm.default} />
            </div>
          </div>
        );
      case "int":
      case "float":
        return (
          <TextField
            type="number"
            label={key}
            variant="standard"
            className="w-2/3"
          />
        );
      case "str":
        return <TextField label={key} variant="standard" className="w-2/3" />;
      default:
        return (
          <div className="w-full flex gap-2">
            <div className="w-1/3">{key}</div>
            <div className="w-2/3 text-orange-400 italic">
              (idk how to render {parm.type})
            </div>
          </div>
        );
    }
  }

  return (
    <div className="StatForm w-full p-4">
      <h3 className="text-xl font-bold mb-4">{selected?.trailmap}</h3>

      <FormGroup>
        {Object.entries(selected.parms).map(([key, parm]) => (
          <div className="w-full flex items-center gap-2 py-1" key={key}>
            {renderInput(key, parm)}
          </div>
        ))}
      </FormGroup>
    </div>
  );
}
