type Stages = {
  name: string;
  color: string;
  level: number;
};

type Owner = {
  name: string;
  avatarImageId: number;
};

export type Candidate = {
  name: string;
  avatarImageId: number;
  rating: number;
  stages: Stages;
  date: string;
  owner: Owner;
};
