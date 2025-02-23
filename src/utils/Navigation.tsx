import { useRouter } from "next/navigation";

const useNavigation = () => {
    const router = useRouter();

    const goTo = (path: string, newTab: boolean = false) => {
        if (path.startsWith("http")) {
            newTab
                ? window.open(path, "_blank", "noopener,noreferrer")
                : router.push(path);
        } else {
            router.push(path);
        }
    };

    return { goTo };
};

export default useNavigation;
