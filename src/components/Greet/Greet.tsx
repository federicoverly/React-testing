// Component
export const Greet = () => {
  return <div>Hello</div>;
};

// TDD Approach

type GreekTDDProps = {
  name?: string;
};

export const GreekTDD = ({ name }: GreekTDDProps) => {
  return (
    <>
      <div>Hello {name}</div>;
    </>
  );
};

Greet.displayName = "Greet";
