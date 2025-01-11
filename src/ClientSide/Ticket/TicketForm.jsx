const TicketForm = () => {
  const htmlContent = `
      <div class="mt-[60px] px-[30px] md:mt-[80px] md:px-[32px] lg:px-[60px] lg:mt-[80px] xl:px-[200px] xl:mt-[100px] 2xl:px-[100px] 2xl:mt-[100px] mb-[50px]">
        <div class="bg-[#7EA254] mt-[35px] py-[35px] md:py-[50px] lg:py-[70px] xl:py-[80px] 2xl:py-[120px] rounded-[10px]">
          <h3 class="eventCardTitle">request for a session!</h3>
          <form class="space-y-[20px] md:space-y-[25px] lg:space-y-[30px] xl:space-y-[30px] 2xl:space-y-[40px]">
            <div class="inputParent">
              <label class="formTitle" for="full_name">Full Name</label>
              <input class="contactInpufeild" type="text" name="from_name" id="full_name" required />
            </div>
            <div class="inputParent">
              <label class="formTitle" for="address">Address</label>
              <input class="contactInpufeild" type="text" name="address" id="address" required />
            </div>
            <div class="inputParent">
              <label class="formTitle" for="mobile_number">Alternative Phone Number</label>
              <input class="contactInpufeild" type="text" name="from_number" id="mobile_number" required />
            </div>
            <div class="inputParent">
              <label class="formTitle" for="from_email">Email Address</label>
              <input class="contactInpufeild" type="email" name="from_email" id="from_email" required />
            </div>
            <div class="inputParent">
              <label class="formTitle" for="from_message">Message</label>
              <input class="contactInpufeild" type="text" name="from_message" id="from_message" required />
            </div>
            <div class="inputParent pt-[30px] pb-[15px] md:pt-[35px] md:pb-[20px] lg:pt-[40px] lg:pb-[20px] xl:pt-[40px] xl:pb-[20px] 2xl:pb-[30px]">
              <input class="contactSendBtn" type="submit" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    `;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default TicketForm;
