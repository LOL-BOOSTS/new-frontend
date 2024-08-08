import { Modal } from "flowbite-react";
import Select, { components } from "react-select";
import { useEffect, useState } from "react";
import classNames from "../../../consts/classNames";
// Import Data
import _agents from "../../../data/game/agents.json";
import { ModalAgentProps, ModalChampionRoleProps } from "../../../interface";
import themes from "../../../consts/themes";

const { MultiValue } = components;

const MultiValueOption = (props: any) => {
  return (
    <MultiValue
      {...props}
      className="!bg-indigo-900 items-center flex hover:!text-indigo-500"
    >
      <div className="inline-flex gap-2 items-center text-white rounded-sm">
        <img
          src={props.data.image}
          className="w-6 flex-shrink-0 rounded"
          alt={props.data.label}
        />
        <span>{props.data.value}</span>
      </div>
    </MultiValue>
  );
};

const { Option } = components;
const IconOption = (props: any) => {
  return (
    <Option {...props}>
      <p className="flex items-center gap-4">
        <img
          src={props.data.image}
          className="w-10 object-cover object-center"
          alt={props.data.label}
        />
        {props.data.value}
      </p>
    </Option>
  );
};

const ModalAgent = (props: ModalAgentProps) => {
  const { open, setOpen, agents, setAgents } = props;
  const [_agentOptions, setAgentOptions] = useState<any[]>([]);
  useEffect(() => {
    let updatedChampionOptions: any[] = [];
    _agents.map((item, i) => {
      updatedChampionOptions.push({
        label: item.name,
        value: item.name,
        image: item.image,
      });
    });
    setAgentOptions(updatedChampionOptions);
  }, []);

  return (
    <>
      <Modal
        dismissible
        theme={themes.modalTheme}
        show={open}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>Agents</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                Select your Agents{" "}
                <span
                  className={`text-indigo-500 border-indigo-500 border rounded-xl  px-2 text-sm`}
                >
                  +20%
                </span>
              </div>
              <div>
                <Select
                  defaultValue={[...agents]}
                  options={_agentOptions}
                  components={{
                    Option: IconOption,
                    MultiValue: MultiValueOption,
                  }}
                  styles={{
                    control: (styles) => ({
                      ...styles,
                      backgroundColor: "transparent",
                    }),
                    menu: (styles) => ({
                      ...styles,
                      backgroundColor: "#3730a3", // Change this to your desired color
                    }),
                    option: (
                      styles,
                      { data, isDisabled, isFocused, isSelected }
                    ) => {
                      return {
                        ...styles,
                        backgroundColor: isDisabled
                          ? "#a5b4fc"
                          : isSelected
                          ? "#3730a3"
                          : isFocused
                          ? "#312e81"
                          : "transparent", // Use transparent or another color if needed
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: ".25rem",
                        color: "#FFF",
                        cursor: isDisabled ? "not-allowed" : "default",
                        ":active": {
                          ...styles[":active"],
                          backgroundColor: !isDisabled
                            ? isSelected
                              ? "#312e81"
                              : "#3730a3"
                            : "#a5b4fc",
                        },
                      };
                    },
                    input: (styles) => ({
                      ...styles,
                      color: "#FFF",
                    }),
                  }}
                  isMulti
                  name="colors"
                  onChange={(values) => setAgents(values)}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={`${classNames.btnClass}`}
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAgent;
