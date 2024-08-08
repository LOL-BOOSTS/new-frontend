export interface ModalChampionRoleProps {
  open?: boolean;
  setOpen: (val: boolean) => void;
  roles: any[];
  champions: any[];
  setRoles: (roles: any) => void;
  setChampions: (roles: any) => void;
}

export interface ModalAgentProps {
  open?: boolean;
  setOpen: (val: boolean) => void;
  agents: any[];
  setAgents: (agents: any) => void;
}

export interface ModalLoginProps {
  open?: boolean;
  setOpen: (val: boolean) => void;
}
