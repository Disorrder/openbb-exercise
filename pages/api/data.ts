import { IStat } from "../../utils/stats.type";
import TRAILMAP from "../../utils/trailmap.json";
import { transform } from "../../utils/transform";

const data = transform<IStat>(TRAILMAP as any);

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  res.status(200).json(data);
};
