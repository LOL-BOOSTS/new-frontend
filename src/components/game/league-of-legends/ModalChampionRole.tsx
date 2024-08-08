import { Modal } from "flowbite-react";
import Select, { components } from "react-select";
import { useEffect, useState } from "react";
import classNames from "../../../consts/classNames";
// Import Data
import _champions from "../../../data/game/champions.json";
import _roles from "../../../data/game/roles.json";
import { ModalChampionRoleProps } from "../../../interface";
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

const ModalChampionRole = (props: ModalChampionRoleProps) => {
  const { open, setOpen, roles, setRoles, champions, setChampions } = props;
  const [championOptions, setChampionOptions] = useState<any[]>([]);
  useEffect(() => {
    let updatedChampionOptions: any[] = [];
    _champions.map((item, i) => {
      updatedChampionOptions.push({
        label: item.name,
        value: item.name,
        image: item.image,
      });
    });
    setChampionOptions(updatedChampionOptions);
  }, []);

  const isSelectedRole = (role: any) =>
    roles?.find((d: any) => d._id === role._id); // Use strict equality (===) for better practice

  const updateRoles = (role: any) => {
    let _roles: any[] = [...roles]; // Make a shallow copy of the roles

    // Check if the role is already selected
    if (isSelectedRole(role)) {
      // If selected, filter it out
      _roles = _roles.filter((d: any) => d._id !== role._id);
    } else {
      // If not selected, add it to the list
      _roles = [..._roles, role].slice(-2); // Add the role directly, not as a nested array
    }

    console.log(_roles);
    setRoles(_roles); // Update the state with the new roles
  };

  return (
    <>
      <Modal
        dismissible
        theme={themes.modalTheme}
        show={open}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>CHAMPIONS & ROLES</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                Select your Roles{" "}
                <span
                  className={`text-green-500 border-green-500 border rounded-xl  px-2 text-sm`}
                >
                  Free
                </span>
              </div>
              <div className="flex justify-center items-center gap-1">
                {_roles?.map((d: any, index: number) => (
                  <button
                    key={index}
                    className={`p-2 rounded-lg flex-shrink-0 ${
                      isSelectedRole(d) ? "bg-indigo-300" : "bg-indigo-800"
                    } cursor-pointer hover:bg-indigo-400`}
                    onClick={() => updateRoles(d)}
                  >
                    <img src={d.icon} alt={d.title} className="w-10" />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                Select your Champions{" "}
                <span
                  className={`text-indigo-500 border-indigo-500 border rounded-xl  px-2 text-sm`}
                >
                  +20%
                </span>
              </div>
              <div>
                <Select
                  defaultValue={[...champions]}
                  options={championOptions}
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
                  onChange={(values) => setChampions(values)}
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

export default ModalChampionRole;
