import { useState } from 'react';
import '../../index.css';
import TabbedLink from '../../components/elements/dashboard/TabbedLink';
import Footer from '../../components/fragments/dashboard/Footer';


const TabbedContent = () => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Tabbed Content</h1>

                <div className="w-full mt-6">
                    <div>
                        <ul className="flex border-b">
                            <TabbedLink tabNumber={1} openTab={openTab} setOpenTab={setOpenTab}>Tab 1</TabbedLink>
                            <TabbedLink tabNumber={2} openTab={openTab} setOpenTab={setOpenTab}>Tab 2</TabbedLink>
                            <TabbedLink tabNumber={3} openTab={openTab} setOpenTab={setOpenTab}>Tab 3</TabbedLink>
                            <TabbedLink tabNumber={4} openTab={openTab} setOpenTab={setOpenTab}>Tab 4</TabbedLink>
                        </ul>
                    </div>
                    <div className="bg-white p-6">
                        {openTab === 1 && (
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus ligula at condimentum sagittis. Maecenas velit libero, fermentum a leo quis, pretium egestas risus. Proin tempus sem magna, vitae convallis purus rhoncus non. Aenean tristique congue metus in lobortis. Nullam nisi leo, luctus in sapien eget, accumsan mattis leo. Morbi magna dolor, dapibus ut ligula eget, commodo venenatis risus. Nunc quis dignissim velit. Donec nec dapibus ligula. Etiam quis libero ultrices, semper arcu id, suscipit purus. Phasellus eu arcu tincidunt dui pellentesque feugiat et at risus. In hendrerit laoreet ante ac imperdiet. Nam tortor urna, laoreet in malesuada quis, pretium cursus dolor.
                            </div>
                        )}
                        {openTab === 2 && (
                            <div>
                                Curabitur at lacinia felis. Curabitur elit ante, efficitur molestie iaculis non, blandit dictum dui. Fusce ac faucibus lorem, in aliquet metus. Praesent bibendum justo vitae ante imperdiet, sit amet posuere tortor tincidunt. Nam a arcu eros. In vitae augue tempus, ullamcorper lectus ut, egestas erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean imperdiet eget sapien nec consequat. Etiam imperdiet diam ac mattis gravida.
                            </div>
                        )}
                        {openTab === 3 && (
                            <div>
                                Duis imperdiet ullamcorper nibh, sed euismod dolor facilisis sit amet. Etiam quis cursus lorem. Vivamus euismod accumsan neque lobortis tempus. Praesent nec lacinia odio, a dictum risus. Sed eget dictum turpis, vitae iaculis orci. Vivamus laoreet consequat velit, non viverra diam pulvinar a. Aliquam bibendum ligula lacus, ac convallis ipsum hendrerit ut. Suspendisse rutrum dui libero, non aliquam lectus lobortis at. Donec gravida finibus sollicitudin. Nulla ut metus finibus purus vehicula porttitor. Fusce id sem non nisl pulvinar scelerisque.
                            </div>
                        )}
                        {openTab === 4 && (
                            <div>
                                Mauris viverra viverra dolor quis gravida. Duis pharetra felis id tellus faucibus pulvinar. Integer non ligula lobortis, hendrerit est eget, maximus sapien. Suspendisse vel nibh feugiat, porta ex et, dignissim diam. Maecenas finibus consectetur efficitur. Sed tempus vehicula interdum. Nam porttitor id risus a ultrices. Proin mi nulla, ultricies eu ipsum vitae, fermentum congue nunc. Phasellus a dictum massa. Nunc quis lacus et ex vulputate molestie ac eget est. Integer porttitor placerat quam, eu convallis sem tristique sit amet. Nam at risus fringilla, pharetra mauris tincidunt, imperdiet nisi.
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TabbedContent;
