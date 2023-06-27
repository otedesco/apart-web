/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonSimple } from "./Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  },
};

const Default: React.FC<React.PropsWithChildren> = (args) => {
  return <SkeletonSimple {...args} />;
};

export const Avatar = Default.bind({});
Avatar.args = {
  width: "40px",
  height: "40px",
  variant: "circle",
};

export const Animation = Default.bind({});
Animation.args = {
  width: "100px",
  height: "200px",
  animation: "waves",
};

export const ParentSize: React.FC<React.PropsWithChildren> = (args) => {
  return (
    <div style={{ width: 200, height: 90 }}>
      <SkeletonSimple {...args} />
    </div>
  );
};

export const Text: React.FC<React.PropsWithChildren> = (args) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <h1 style={{ width: 200 }}>{loading ? <SkeletonSimple {...args} /> : "H1"}</h1>;
};

export const TextWithTransition: React.FC<React.PropsWithChildren> = (args) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Skeleton {...args} isDataReady={!loading} width="200px" height="40px">
      <h1>H1</h1>
    </Skeleton>
  );
};
