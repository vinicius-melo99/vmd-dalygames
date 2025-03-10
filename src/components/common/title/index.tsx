interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h1 className="flex justify-center w-full text-2xl py-7">{title}</h1>;
};

export default Title;
