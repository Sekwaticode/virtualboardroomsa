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
        delay: stagger(0.01)
    })
  }

  const quoteExitAnimation = () =>{
    return animate(scope.current.querySelectorAll('.word'),{
  transform: 'translateY(100%)'},{
    duration: .03,
    delay: stagger(-0.25, {
      //  startDelay: scope.current.querySelectorAll('.word').length * 0.25
    })
  })
  }

  return {
    scope,
    entranceAnimation,
    quoteExitAnimation
}
};

export default useTextRevealAnimation;
