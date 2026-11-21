// The resume is a static file in client/public.
export const downloadResume = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    link.download = "Muhammad Maiz - Resume.pdf";
    link.click();
};
