import { useEffect } from "react";
import { useAnimate, stagger } from "motion/react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    new SplitType(scope.current, {
      types: "lines,words",
      tagName: "span",
    });
  },[scope]);

  const entranceAnimation = () => {
    return animate(scope.current.querySelectorAll('.word'),{
        transform: 'translateY(0)'
    },{
        duration: .5,
        delay: stagger(0.1)
    })
  }

  return {
    scope,
    entranceAnimation
}
};

export default useTextRevealAnimation;
