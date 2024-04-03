import React from "react";
import * as icons from './icons';

const iconMap = new Map(Object.entries(icons));

export default function IdsIcon({ icon, ...props }) {
  if (!iconMap.has(icon)) {
    throw new Error("'icon' property is invalid. The icon strings are case sensitive; try 'Aardvark'.");
  } else {
    const Icon = iconMap.get(icon);
    return <Icon {...props} />;
  }
}
